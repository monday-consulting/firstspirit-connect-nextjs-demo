import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { defaultSchema } from "hast-util-sanitize";

type StyledMessageProps = { content: string };

// Sanitize HTML using built-in browser API (works client-side only)
const sanitizeHtml = (html: string): string => {
  if (typeof window === "undefined") return html;
  
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.innerHTML;
};

// Detect if content is a full HTML document
const isFullHtmlDocument = (content: string): boolean => {
  return /<html[\s>]/i.test(content) || (/<head[\s>]/i.test(content) && /<body[\s>]/i.test(content));
};

// Extract HTML from markdown code blocks if present
const extractHtmlFromCodeBlock = (content: string): string | null => {
  const htmlCodeBlockMatch = content.match(/```html\s*([\s\S]*?)```/i);
  if (htmlCodeBlockMatch) {
    return htmlCodeBlockMatch[1].trim();
  }
  return null;
};

// Detect real HTML outside of fenced code blocks  
const isHtmlMessage = (message: string): boolean => {
  const messageWithoutCodeFences = message.replace(/```[\s\S]*?```/g, "");
  return /<\/?[a-z][\s\S]*>/i.test(messageWithoutCodeFences.trim());
};

// Allow common HTML tags and attributes for markdown with embedded HTML
const sanitizeSchemaWithStyle = {
  ...defaultSchema,
  tagNames: [
    ...(defaultSchema.tagNames || []),
    "style",
    "div",
    "span",
  ],
  attributes: {
    ...(defaultSchema.attributes || {}),
    "*": [...(defaultSchema.attributes?.["*"] || []), "className", "style", "class"],
  },
} as const;

export const StyledMessage = ({ content }: StyledMessageProps) => {
  // Try to extract HTML from code block first
  const htmlFromCodeBlock = useMemo(() => extractHtmlFromCodeBlock(content), [content]);
  
  // Determine what content to render
  const { shouldRenderAsHtml, htmlContent, markdownContent } = useMemo(() => {
    // Case 1: HTML in code block - check if it's a full document
    if (htmlFromCodeBlock && isFullHtmlDocument(htmlFromCodeBlock)) {
      // Extract any text before the code block as markdown context
      const beforeCodeBlock = content.split(/```html/i)[0].trim();
      return {
        shouldRenderAsHtml: true,
        htmlContent: htmlFromCodeBlock,
        markdownContent: beforeCodeBlock,
      };
    }
    
    // Case 2: Raw HTML document (no code block)
    if (isFullHtmlDocument(content)) {
      return {
        shouldRenderAsHtml: true,
        htmlContent: content,
        markdownContent: null,
      };
    }
    
    // Case 3: Regular markdown (possibly with embedded HTML snippets)
    return {
      shouldRenderAsHtml: false,
      htmlContent: null,
      markdownContent: content,
    };
  }, [content, htmlFromCodeBlock]);

  const hasHtml = useMemo(() => isHtmlMessage(content), [content]);
  const remarkPluginsList = useMemo(() => [remarkGfm], []);
  const rehypePluginsList = useMemo(
    () =>
      hasHtml
        ? ([ [rehypeRaw], [rehypeSanitize, sanitizeSchemaWithStyle] ] as const)
        : undefined,
    [hasHtml]
  );

  // Render HTML document with optional markdown prefix
  if (shouldRenderAsHtml && htmlContent) {
    return (
      <div className="prose max-w-none">
        {markdownContent && (
          <ReactMarkdown
            remarkPlugins={remarkPluginsList}
            rehypePlugins={rehypePluginsList as any}
          >
            {markdownContent}
          </ReactMarkdown>
        )}
        <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(htmlContent) }} />
      </div>
    );
  }

  // Render as markdown
  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        remarkPlugins={remarkPluginsList}
        rehypePlugins={rehypePluginsList as any}
      >
        {markdownContent || content}
      </ReactMarkdown>
    </div>
  );
};
