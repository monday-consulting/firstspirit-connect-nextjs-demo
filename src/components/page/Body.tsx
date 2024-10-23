import { Section } from "../page-body-count/Section";
import type { FirstSpiritPageBody, FirstSpiritPageBodyContent } from "@/gql/generated/graphql";

export type BodyProps = {
  content?: FirstSpiritPageBody[];
};

const Body = ({ content }: BodyProps) => {
  const getComponentFromPageBody = (pageBodyContent: FirstSpiritPageBodyContent) => {
    if (pageBodyContent.__typename === "FirstSpiritSection") {
      return <Section section={pageBodyContent} />;
    }
    return null;
  };

  return (
    <div>
      {content?.map((pageBodyContent, index) => (
        <div key={index}>
          {pageBodyContent.children?.map((item, index) => (
            <div key={index}>{getComponentFromPageBody(item)}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export { Body };
