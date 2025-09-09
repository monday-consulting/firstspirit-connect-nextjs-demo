import parse from "html-react-parser";
import Markdown from "react-markdown";

type StyledMessageProps = {
  content: string;
};

export const StyledMessage = ({ content }: StyledMessageProps) => {
  if (/<!DOCTYPE|<html|<body|<div|<table|<head/i.test(content)) {
    const cleaned = content
      .replace(/<!DOCTYPE[^>]*>/gi, "")
      .replace(/```html/g, "")
      .replace(/```/g, "")
      .replace(/<(html|body|head)(\s[^>]*)?>/gi, "<div>")
      .replace(/<\/(html|body|head)>/gi, "</div>");

    return <>{parse(cleaned)}</>;
  }

  return <Markdown>{content}</Markdown>;
};
