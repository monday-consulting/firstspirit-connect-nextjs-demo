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
    .map((item) => {
      // Handle nested content by calling the function recursively
      const nestedContent =
        typeof item.content === "string" ? item.content : convertToMarkdown(item.content);

      switch (item.type) {
        case "link":
          return `<a href=${item.data}>${nestedContent}</a>`;
        case "linebreak":
          return `${nestedContent}</br>`;
        case "underline":
          return `<u>${nestedContent}</u>`;
        case "block":
          return `<p>${nestedContent}</p>`;
        case "paragraph":
          return `<p>${nestedContent}</p>`;
        case "list":
          return `<ul><li>${nestedContent}</li></ul>`;
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
          //@ts-expect-error: type error but it works as expect
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
