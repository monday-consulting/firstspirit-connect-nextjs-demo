import type { FirstSpiritPageBody, FirstSpiritStandard } from "@/gql/generated/graphql";
import { Stage } from "../sections/Stage";
import { Body } from "./Body";
import { getFsImageData } from "@/utils/links";

export type StandardLayoutProps = {
  pageInfo?: Pick<
    FirstSpiritStandard,
    "ptHeadline" | "ptSubheadline" | "ptImage" | "ptMdImageAltText"
  >;
  pageBodies?: FirstSpiritPageBody[];
};

const StandardLayout = ({ pageInfo, pageBodies }: StandardLayoutProps) => {
  return (
    <>
      {pageInfo?.ptImage && (
        <Stage
          headline={pageInfo.ptHeadline || ""}
          subline={pageInfo.ptSubheadline || ""}
          image={getFsImageData(pageInfo.ptImage, pageInfo.ptMdImageAltText)}
          shortVersion
        />
      )}
      <Body content={pageBodies} />
    </>
  );
};

export { StandardLayout };
