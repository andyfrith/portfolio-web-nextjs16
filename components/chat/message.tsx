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
      {message.role === "user" ? (
        <div className="mt-6 shrink-0 text-white">
          <UserIcon />
        </div>
      ) : (
        <div className="mt-6 shrink-0 text-(--text-green-color)">
          <BotIcon />
        </div>
      )}
      <div className="mb-4 flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-zinc-300 p-6 text-sm text-zinc-400 dark:border-zinc-700 dark:bg-[#333] dark:text-zinc-400">
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
    </div>
  );
}
