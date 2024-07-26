import type { Section as FsxaSection } from "fsxa-api";
import { ProductCategoryTeaser } from "../section/ProductCategoryTeaser";
import { getProductLink } from "@/utils/links";

interface SectionProps {
  content: FsxaSection;
}

const Section = ({ content }: SectionProps) => {
  const SectionComponent = () => {
    switch (content.sectionType) {
      case "smartliving.product_overview":
        return "SectionProductOverview";
      case "text_image":
        return "SectionTextImage";
      case "product_category_teaser":
        return (
          <ProductCategoryTeaser
            categoryProduct={{
              category: content.data.st_category.value,
              headline: content.data.st_headline,
              link: {
                label: content.data.st_category_link.data.lt_text,
                href: getProductLink("TODO"),
              },
            }}
          />
        );
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
  };

  return (
    <div data-testid="section">
      <div
        data-preview-id={content.previewId?.split(".")[0] !== "" ? content.previewId : undefined}
      >
        {<SectionComponent />}
      </div>
    </div>
  );
};

export default Section;
