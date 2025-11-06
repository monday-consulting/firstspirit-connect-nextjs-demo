import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

type StyledMessageProps = {
  content: string;
};

export const StyledMessage = ({ content }: StyledMessageProps) => {
  // Extract HTML from code fences (fallback for older responses)
  const extractedContent = content.replace(/```html\s*([\s\S]*?)```/gi, (_match, htmlContent) => {
    return htmlContent.trim();
  });

  // Use unified rendering: Markdown with rehype-raw handles both Markdown and HTML
  // This allows proper rendering of mixed content (Markdown headings + HTML tables + Markdown text)
  return (
    <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
      {extractedContent}
    </Markdown>
  );
};
