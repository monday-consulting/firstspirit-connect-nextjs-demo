import type { FirstSpiritPageBody, FirstSpiritStandard } from "@/gql/generated/graphql";
import { Stage } from "../sections/Stage";
import { Body } from "./Body";

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
          image={{
            src:
              (pageInfo.ptImage.__typename === "FirstSpiritImage" &&
                pageInfo.ptImage.resolutions?.original?.url) ||
              "",
            alt: pageInfo.ptMdImageAltText || "",
          }}
          shortVersion
        />
      )}
      <Body content={pageBodies} />
    </>
  );
};

export { StandardLayout };
