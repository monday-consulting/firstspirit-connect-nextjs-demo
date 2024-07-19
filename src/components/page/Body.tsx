import React, { useMemo } from "react";
import type { PageBodyContent, PageBody } from "fsxa-api";
import { Dataset } from "../page-body-count/Dataset";
import Content2Section from "../page-body-count/Content2Section";
import Section from "../page-body-count/Section";
import { Unknown } from "../Unknown";
import { useDev } from "../composables/showDev";
import { useNextApp } from "../tests/testutils/nextMocks";
import { DevComponent } from "../Dev";
import { AddSection } from "../AddSection";
import ClientOnly from "../elements/ClientOnly";

interface BodyProps {
  pageBody: PageBody;
}

const Body = ({ pageBody }: BodyProps) => {
  const { showDev } = useDev();

  const { $isPreviewMode } = useNextApp();

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
      {pageBody.children.map((pageBodyContent) => (
        <div className="" key={pageBodyContent.type}>
          {showDev && $isPreviewMode && <DevComponent content={pageBodyContent} />}
          {getComponentFromPageBody(pageBodyContent)}
        </div>
      ))}
      <ClientOnly>{$isPreviewMode && <AddSection bodyName={pageBody.name} />}</ClientOnly>
    </div>
  );
};

export default Body;
