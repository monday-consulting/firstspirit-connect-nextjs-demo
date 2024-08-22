import { Section } from "../page-body-count/Section";
import type { FirstSpiritPageBody } from "@/gql/generated/graphql";

export type BodyProps = {
  content?: FirstSpiritPageBody[];
};

const Body = ({ content }: BodyProps) => {
  // biome-ignore lint/suspicious/noExplicitAny: No type definitions
  const getComponentFromPageBody = (pageBodyContent: any) => {
    switch (pageBodyContent.type) {
      case "Section":
        return <Section content={pageBodyContent} />;
      default:
        return null;
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
