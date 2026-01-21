import { createUIMessageStream, createUIMessageStreamResponse } from "ai";

interface TextPart {
  type: "text";
  text: string;
}

interface ChatMessage {
  role: string;
  content?: string;
  parts?: TextPart[];
}

interface AIServiceResponse {
  text: string;
}

/**
 * Creates a streaming response compatible with AI SDK's useChat hook
 * Uses the AI SDK v5 UIMessageStream for proper message formatting
 */
function createTextResponse(text: string): Response {
  const messageId = `msg-${Date.now()}`;
  const partId = `part-${Date.now()}`;
  
  // console.log("Creating stream response with messageId:", messageId, "partId:", partId);
  
  const stream = createUIMessageStream({
    execute: async ({ writer }) => {
      // Start the message
      writer.write({ 
        type: "start", 
        messageId,
      });
      
      // Start a text part (use unique part ID)
      writer.write({ type: "text-start", id: partId });
      
      // Write the text content
      writer.write({ type: "text-delta", delta: text, id: partId });
      
      // End the text part
      writer.write({ type: "text-end", id: partId });
      
      // Finish the message
      writer.write({ 
        type: "finish", 
        finishReason: "stop",
      });
    },
  });

  return createUIMessageStreamResponse({ stream });
}

/**
 * POST handler for chat messages
 * Forwards the request to the local AI service at localhost:3001
 * Returns a streaming response compatible with AI SDK's useChat hook
 */
/**
 * Extracts the prompt text from various message formats
 */
function extractPrompt(body: Record<string, unknown>): string {
  // Handle direct text property (from sendMessage({ text: "..." }))
  if (typeof body.text === "string") {
    return body.text;
  }
  
  // Handle direct prompt property
  if (typeof body.prompt === "string") {
    return body.prompt;
  }
  
  // Handle messages array format
  const messages = body.messages as ChatMessage[] | undefined;
  if (Array.isArray(messages) && messages.length > 0) {
    const lastMessage = messages[messages.length - 1];
    
    // Handle 'content' string format
    if (typeof lastMessage.content === "string") {
      return lastMessage.content;
    }
    
    // Handle 'parts' array format (AI SDK v4+)
    if (lastMessage.parts && Array.isArray(lastMessage.parts)) {
      const textPart = lastMessage.parts.find((p) => p.type === "text");
      return textPart?.text ?? "";
    }
  }
  
  return "";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // console.log("Request body:", JSON.stringify(body, null, 2));
    
    const prompt = extractPrompt(body);
    // console.log("Extracted prompt:", prompt);
    
    if (!prompt) {
      console.error("No prompt could be extracted from the request body");
      return createTextResponse("I didn't receive a message. Please try again.");
    }

    const response = await fetch(`${process.env.ANDYFRITH_API_SERVER}/ai/text`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      console.error("API error:", response.status, response.statusText);
      return createTextResponse("Sorry, I couldn't reach the AI service. Please try again.");
    }

    const data: AIServiceResponse = await response.json();
    // console.log("AI response:", data);

    return createTextResponse(data.text);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error details:", {
      message: errorMessage,
      error,
    });
    
    let userMessage = "Sorry, something went wrong. Please try again.";
    
    if (errorMessage.includes("ECONNREFUSED") || errorMessage.includes("fetch failed")) {
      userMessage = "Cannot connect to the AI service. Please ensure it's running.";
    }
    
    return createTextResponse(userMessage);
  }
}
