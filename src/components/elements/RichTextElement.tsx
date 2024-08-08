import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Link from "next/link";

export type RichTextElementProps = {
  content: RichTextElementProps[] | string;
  data: string;
  type: string;
};

const convertToMarkdown = (content: RichTextElementProps[]): string => {
  return content
    .map((item) => {
      switch (item.type) {
        case "link":
          return `<a href=${item.data}>${item.content}</a>`;
        case "linebreak":
          return `${item.content}</br>`;
        case "underline":
          return `<u>${item.content}</u>`;
        case "block":
          return `<p>${item.content}</p>`;
        case "paragraph":
          return `<p>${item.content}</p>`;
        case "list":
          return `<ul><li>${item.content}</li></ul>`;
        default:
          return item.content;
      }
    })
    .join(" ");
};

const RichTextElement = ({ content }: RichTextElementProps) => {
  const markdownContent = typeof content === "string" ? content : convertToMarkdown(content);

  return (
    <div>
      <ReactMarkdown
        //@ts-expect-error: type error but it works as expect
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ({ href, children }) => <Link href={href || "#"}>{children}</Link>,
          ul: ({ children }) => <ul>{children}</ul>,
          li: ({ children }) => (
            <li>
              <span className="mr-2">&#8226;</span>
              {children}
            </li>
          ),
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default RichTextElement;
