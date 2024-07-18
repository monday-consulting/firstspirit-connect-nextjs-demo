import type React from "react";
import { useMemo } from "react";
import type { Content2Section as FsxaContent2Section } from "fsxa-api";
import { Unknown } from "../Unknown";
import { useNextApp } from "../tests/testutils/nextMocks";

interface Content2SectionProps {
  content: FsxaContent2Section;
}

const Content2Section: React.FC<Content2SectionProps> = ({ content }) => {
  const { $isPreviewMode } = useNextApp();

  const content2SectionComponent = useMemo(() => {
    switch (content.sectionType) {
      default:
        return undefined;
    }
  }, [content.sectionType]);
  console.log($isPreviewMode, content2SectionComponent);

  return (
    <div data-testid="content2section">
      {content2SectionComponent ? (
        <>{content2SectionComponent}</>
      ) : (
        $isPreviewMode &&
        !content2SectionComponent && <Unknown content={content} data={content.data} />
      )}
    </div>
  );
};

export default Content2Section;
