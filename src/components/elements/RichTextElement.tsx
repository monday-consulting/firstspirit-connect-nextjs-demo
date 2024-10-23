import { Link } from "@/i18n/routing";

export type RichTextElementContent = {
  content: RichTextElementContent[] | string;
  data: string;
  type: string;
};

export type RichTextElementProps = {
  content: RichTextElementContent[] | string;
  className?: string;
};

const convertToReact = (content: RichTextElementContent[]): React.ReactNode => {
  return content?.map((item, index) => {
    // Handle nested content recursively
    const nestedContent =
      typeof item.content === "string" ? item.content : convertToReact(item.content);

    switch (item.type) {
      case "link":
        return (
          <Link href={item.data || "#"} className="hover:underline" key={index}>
            {nestedContent}
          </Link>
        );
      case "list":
        return <ul key={index}>{nestedContent}</ul>;
      case "li":
        return (
          <li key={index}>
            <span className="mr-2">&#8226;</span>
            {nestedContent}
          </li>
        );
      case "td":
        return <td key={index}>{nestedContent}</td>;
      case "tr":
        return <tr key={index}>{nestedContent}</tr>;
      case "table":
        return <table key={index}>{nestedContent}</table>;
      case "bold":
        return <strong key={index}>{nestedContent}</strong>;
      case "block":
      case "paragraph":
        return <p key={index}>{nestedContent}</p>;
      default:
        return <span key={index}>{nestedContent}</span>;
    }
  });
};

const RichTextElement = ({ content, className }: RichTextElementProps) => {
  return (
    <>
      {typeof content === "string" ? (
        <div className={className}>{content}</div>
      ) : (
        <div className={className}>{convertToReact(content)}</div>
      )}
    </>
  );
};

export { RichTextElement };
