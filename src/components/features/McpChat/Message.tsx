import parse from "html-react-parser";
import Markdown from "react-markdown";

export const StyledMessage = ({ content }: { content: string }) => {
  if (/<!DOCTYPE|<html|<body|<head/i.test(content)) {
    const cleaned = content
      .replace(/<!DOCTYPE[^>]*>/gi, "")
      .replace(/<(html|body|head)(\s[^>]*)?>/gi, "<div>")
      .replace(/<\/(html|body|head)>/gi, "</div>");

    return <>{parse(cleaned)}</>;
  }

  return <Markdown>{content}</Markdown>;
};
