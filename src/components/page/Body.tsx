import React from "react";
import type { PageBodyContent } from "fsxa-api";
import { Dataset } from "../page-body-count/Dataset";
import Content2Section from "../page-body-count/Content2Section";
import Section from "../page-body-count/Section";
import { Unknown } from "../Unknown";

interface BodyProps {
  content: PageBodyContent[];
}

const Body = ({ content }: BodyProps) => {
  const getComponentFromPageBody = (pageBodyContent: PageBodyContent) => {
    switch (pageBodyContent.type) {
      case "Dataset":
        return <Dataset content={pageBodyContent} />;
      case "Section":
        return <Section content={pageBodyContent} />;
      case "Content2Section":
        return <Content2Section content={pageBodyContent} />;
      default:
        return <Unknown />;
    }
  };

  return (
    <div>
      {content.map((pageBodyContent) => (
        <div key={pageBodyContent.type}>{getComponentFromPageBody(pageBodyContent)}</div>
      ))}
    </div>
  );
};

export default Body;
