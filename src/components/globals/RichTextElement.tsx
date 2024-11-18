import { Link } from "@/i18n/routing";
import { cn } from "@/utils/cn";

export type RichTextElementContent = {
  content: RichTextElementContent[] | string;
  data: { href?: string; format?: string };
  type: string;
};

export type RichTextElementProps = {
  content: RichTextElementContent[] | string;
  className?: string;
};

const convertToReact = (content: RichTextElementContent[]): React.ReactNode => {
  return content?.map((item, index) => {
    const nestedContent =
      typeof item.content === "string" ? item.content : convertToReact(item.content);

    switch (item.type) {
      case "linebreak":
        return <br key={index} />;
      case "link":
        return (
          <Link href={item.data.href || "#"} className="hover:underline" key={index}>
            {nestedContent}
          </Link>
        );
      case "list":
        return <ul key={index}>{nestedContent}</ul>;
      case "listitem":
        return (
          <li key={index}>
            <span className="mr-2">&#8226;</span>
            {nestedContent}
          </li>
        );
      case "table":
        return (
          <table key={index} className="w-full table-auto text-left font-medium text-sm text-text">
            {nestedContent}
          </table>
        );
      case "thead":
        return <thead key={index}>{nestedContent}</thead>;
      case "tbody":
        return <tbody key={index}>{nestedContent}</tbody>;
      case "tr":
        return (
          <tr key={index} className={cn(index % 2 !== 0 && "bg-lightGray")}>
            {nestedContent}
          </tr>
        );
      case "th":
        return (
          <th key={index} className={cn(index === 0 ? "px-6 py-3" : "py-3 pr-6")}>
            <strong>{nestedContent}</strong>
          </th>
        );
      case "td":
        return (
          <td key={index} className={cn(index === 0 ? "px-6 py-5" : "py-5 pr-6")}>
            {nestedContent}
          </td>
        );
      case "bold":
        return <strong key={index}>{nestedContent}</strong>;
      case "block":
        return <div key={index}>{nestedContent}</div>;
      case "paragraph":
        return (
          <div className="my-2" key={index}>
            {nestedContent}
          </div>
        );
      case "text":
        return item.data.format === "bold" ? (
          <strong key={index}>{nestedContent}</strong>
        ) : (
          <span key={index}>{nestedContent}</span>
        );
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
