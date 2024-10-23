import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Link } from "@/i18n/routing";
import { cn } from "@/utils/cn";

export type RichTextElementContent = {
  content: RichTextElementContent[] | string;
  data: string;
  type: string;
};

export type RichTextElementProps = {
  content: RichTextElementContent[] | string;
  className?: string;
};

const convertToMarkdown = (content: RichTextElementContent[]): string => {
  return content
    ?.map((item) => {
      const nestedContent =
        typeof item.content === "string" ? item.content : convertToMarkdown(item.content);

      switch (item.type) {
        case "td":
          return `<td>${nestedContent}</td>`;
        case "tr":
          return `<tr>${nestedContent}</tr>`;
        case "table":
          return `<table>${nestedContent}</table>`;
        case "block":
          return `<div>${nestedContent}</div>`;
        case "text":
          return nestedContent; // Plain text doesn't need wrapping.
        case "bold":
          return `<strong>${nestedContent}</strong>`;
        default:
          return nestedContent;
      }
    })
    .join(" ");
};

const RichTextElement = ({ content, className }: RichTextElementProps) => {
  return (
    <>
      {typeof content === "string" ? (
        <>{content}</>
      ) : (
        <ReactMarkdown
          className={cn(className)}
          // @ts-expect-error: type error but it works as expect
          rehypePlugins={[rehypeRaw]}
          components={{
            a: ({ href, children }) => (
              <Link href={href || "#"} className="hover:underline">
                {children}
              </Link>
            ),
            ul: ({ children }) => <ul>{children}</ul>,
            li: ({ children }) => (
              <li>
                <span className="mr-2">&#8226;</span>
                {children}
              </li>
            ),
          }}
        >
          {convertToMarkdown(content)}
        </ReactMarkdown>
      )}
    </>
  );
};

export { RichTextElement };
