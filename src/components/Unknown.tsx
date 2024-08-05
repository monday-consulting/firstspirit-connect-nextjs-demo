import React, { useMemo } from "react";
import type { Section, Dataset, Content2Section, Page, DataEntries } from "fsxa-api";
interface UnknownProps {
  content?: Section | Dataset | Content2Section | Page;
  data?: DataEntries;
}

const Unknown = ({ content }: UnknownProps) => {
  const componentType = useMemo(() => {
    switch (content?.type) {
      case "Section":
        return `Section ${content.sectionType}`;
      case "Content2Section":
        return `Content2Section ${content.sectionType}`;
      case "Dataset":
        return `Dataset ${content.schema} ${content.template}`;
      default:
        return content?.name;
    }
  }, [content]);

  return (
    <div className="group relative border bg-red-50 px-12 py-4 text-red-500" data-testid="unknown">
      <span className="font-bold">Unknown Component {componentType}</span>
    </div>
  );
};

export { Unknown };
