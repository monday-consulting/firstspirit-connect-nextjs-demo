import type React from "react";
import { useMemo } from "react";
import type { Content2Section as FsxaContent2Section } from "fsxa-api";
import { Unknown } from "../Unknown";

export type Content2SectionProps = {
  content: FsxaContent2Section;
};

const Content2Section: React.FC<Content2SectionProps> = ({ content }) => {
  const content2SectionComponent = useMemo(() => {
    switch (content.sectionType) {
      default:
        return undefined;
    }
  }, [content.sectionType]);

  return (
    <div data-testid="content2section">
      {content2SectionComponent ? (
        <>{content2SectionComponent}</>
      ) : (
        <Unknown content={content} data={content.data} />
      )}
    </div>
  );
};

export default Content2Section;
