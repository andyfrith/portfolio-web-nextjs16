import { streamText, UIMessage, convertToModelMessages } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google("gemini-2.5-flash"),
    messages: convertToModelMessages(messages),
    system:
      `You are a helpful assistant found on the portfolio website for Andy Frith. ` +
      `You help guide users through Andy Frith's experiences and expertise and share how he can help with their project needs. ` +
      `Respond to the users' request with a list of Andy's best traits and skills sure to make their project a glowing success.`,
  });

  return result.toUIMessageStreamResponse();
}
