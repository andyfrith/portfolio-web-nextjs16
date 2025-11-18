"use client";

import ReactMarkdown from "react-markdown";

interface TraitMarkdownProps {
  content: string;
}

export default function TraitMarkdown({ content }: TraitMarkdownProps) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown
        components={{
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-lg font-semibold mt-4 mb-2 text-(--text-color) dark:text-(--text-color-dark)">
              {children}
            </h4>
          ),
          h5: ({ children }) => (
            <h5 className="text-md font-semibold mt-4 mb-2">{children}</h5>
          ),
          ul: ({ children }) => (
            <ul className="list-inside mb-4 space-y-2 ml-4">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="mb-1">{children}</li>,
          p: ({ children }) => (
            <p className="mb-4 leading-relaxed">{children}</p>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
