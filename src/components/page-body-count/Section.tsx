import React, { useMemo } from "react";
import type { Section as FsxaSection } from "fsxa-api";
import { Unknown } from "../Unknown";
import { useNextApp } from "../tests/testutils/nextMocks";

interface SectionProps {
  content: FsxaSection;
}

const Section = ({ content }: SectionProps) => {
  const { $isPreviewMode } = useNextApp();

  const sectionComponent = useMemo(() => {
    switch (content.sectionType) {
      case "smartliving.product_overview":
        return "SectionProductOverview";
      case "text_image":
        return "SectionTextImage";
      case "product_category_teaser":
        return "SectionProductCategoryTeaser";
      case "steps":
        return "SectionSteps";
      case "accordion":
        return "SectionAccordion";
      case "stage":
        return "SectionStage";
      case "features":
        return "SectionFeatures";
      case "interesting_facts":
        return "SectionInterestingFacts";
      case "products.category_products":
        return "SectionProductCategory";
      case "smartliving.product":
        return "SectionProduct";
      case "teaser":
        return "SectionTeaser";
      case "featured_products":
        return "SectionFeaturedProducts";
      default:
        return undefined;
    }
  }, [content.sectionType]);

  return (
    <div data-testid="section">
      {sectionComponent ? (
        <div
          data-preview-id={content.previewId?.split(".")[0] !== "" ? content.previewId : undefined}
        >
          {sectionComponent}
        </div>
      ) : (
        $isPreviewMode && !sectionComponent && <Unknown content={content} data={content.data} />
      )}
    </div>
  );
};

export default Section;
