import type { UIMessage as AIMessage } from "@ai-sdk/react";
import { UserIcon, BotIcon } from "../icons";
import Markdown from "react-markdown";

interface MessageProps {
  message: AIMessage;
}

/**
 * Renders a single chat message with role label and content parts.
 * @param message - The message object containing role, id, and parts
 */
export function Message({ message }: MessageProps) {
  return (
    <div className="flex items-start gap-2 whitespace-pre-wrap">
      <div className="mt-0.5 flex-shrink-0">
        {message.role === "user" ? <UserIcon /> : <BotIcon />}
      </div>
      <div className="flex-1">
        {message.parts.map((part, i) => {
          switch (part.type) {
            case "text":
              return (
                <div key={`${message.id}-${i}`}>
                  <Markdown>{part.text}</Markdown>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
