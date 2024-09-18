import { Body } from "../page/Body";
import type { FirstSpiritPageBody } from "@/gql/generated/graphql";
import { Stage } from "../section/Stage";

export type StandardLayoutProps = {
  // biome-ignore lint/suspicious/noExplicitAny: Lack of type definitions
  pageInfo?: any;
  pageBodies?: FirstSpiritPageBody[];
};

const StandardLayout = ({ pageInfo, pageBodies }: StandardLayoutProps) => {
  return (
    <>
      <Stage
        headline={pageInfo.pt_headline}
        subline={pageInfo.pt_subheadline}
        image={{
          src: pageInfo.pt_image.resolutions.ORIGINAL.url,
          alt: pageInfo.pt_image_alt_text,
        }}
        sectionId={""}
        shortVersion
      />
      <Body content={pageBodies} />
    </>
  );
};

export { StandardLayout };
