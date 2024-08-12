import { Dataset } from "../page-body-count/Dataset";
import { Content2Section } from "../page-body-count/Content2Section";
import { Section } from "../page-body-count/Section";
import { Unknown } from "../Unknown";
import type { FirstSpiritPageBody } from "@/gql/generated/graphql";

export type BodyProps = {
  content?: FirstSpiritPageBody[];
};

const Body = ({ content }: BodyProps) => {
  // TODO: Missing type definitions
  // biome-ignore lint/suspicious/noExplicitAny: We don't have enough type definitions in FS
  const getComponentFromPageBody = (pageBodyContent: any) => {
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
      {content?.map((pageBodyContent) => (
        <div key={pageBodyContent.previewId}>
          {pageBodyContent.children?.map((item) => (
            <div key={item.id}>{getComponentFromPageBody(item)}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export { Body };
