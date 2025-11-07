import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { defaultSchema } from "hast-util-sanitize";

type StyledMessageProps = { content: string };

// Allow <style> and inline style safely
const sanitizeSchemaWithStyle = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames || []), "style"],
  attributes: {
    ...(defaultSchema.attributes || {}),
    "*": [...(defaultSchema.attributes?.["*"] || []), "className", "style"],
  },
} as const;

// Detect real HTML outside of fenced code blocks
const isHtmlMessage = (message: string): boolean => {
  const messageWithoutCodeFences = message.replace(/```[\s\S]*?```/g, "");
  return /<\/?[a-z][\s\S]*>/i.test(messageWithoutCodeFences.trim());
};

export const StyledMessage = ({ content }: StyledMessageProps) => {
  // Decide once per render if HTML handling is needed
  const hasHtml = useMemo<boolean>(() => isHtmlMessage(content), [content]);

  // Keep GFM for tables, task lists, and pipes
  const remarkPluginsList = useMemo(() => [remarkGfm], []);

  // Enable raw HTML + sanitize only when needed
  const rehypePluginsList = useMemo(
    () =>
      hasHtml
        ? ([ [rehypeRaw], [rehypeSanitize, sanitizeSchemaWithStyle] ] as const)
        : undefined,
    [hasHtml]
  );

  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        remarkPlugins={remarkPluginsList}
        rehypePlugins={rehypePluginsList as any}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
