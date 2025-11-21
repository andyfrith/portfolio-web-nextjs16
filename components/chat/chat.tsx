"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useEffect, useRef } from "react";
import { Message } from "./message";
import { Overview } from "./overview";
import { SuggestedActions } from "./suggested-actions";
import { motion } from "framer-motion";

interface SuggestedAction {
  label: string;
  prompt: string;
}

const SUGGESTED_ACTIONS: SuggestedAction[] = [
  {
    label: "Tell me about Andy's leadership style.",
    prompt: "Tell me about Andy's leadership style.",
  },
  {
    label: "What are some career highlights and successes?",
    prompt: "What are some career highlights and successes?",
  },
  {
    label: "What technical skills does Andy possess?",
    prompt: "What technical skills does Andy possess?",
  },
  {
    label: "How can Andy help my project needs?",
    prompt: "How can Andy help my project needs?",
  },
];

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleActionSelect = (prompt: string) => {
    setInput(prompt);
    sendMessage({ text: prompt });
    setInput("");
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col">
      <Overview />
      <SuggestedActions
        actions={SUGGESTED_ACTIONS}
        onSelect={handleActionSelect}
        selectedPrompt={input}
      />

      <div
        ref={messagesContainerRef}
        className="max-h-[60vh] space-y-4 overflow-y-auto px-4 py-4"
      >
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        className="mb-4"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage({ text: input });
          setInput("");
        }}
      >
        <motion.div
          key="overview"
          className="mx-4 mt-5 max-w-[500px] md:mx-0"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ delay: 0.5 }}
        >
          <textarea
            className="mb-4 flex w-full flex-col gap-4 rounded-2xl border border-white bg-zinc-200 p-6 text-sm text-zinc-400 placeholder-zinc-400 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-white"
            value={input}
            placeholder="I have a specific question or request."
            rows={3}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
        </motion.div>
      </form>
    </div>
  );
}
