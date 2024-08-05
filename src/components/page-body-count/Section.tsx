import type { Section as FsxaSection } from "fsxa-api";
import ProductCategoryTeaser from "../section/ProductCategoryTeaser";
import { getProductLink } from "@/utils/links";

export interface SectionProps {
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
            category={{
              type: content.data.st_category.type,
              value: content.data.st_category.value,
              key: content.data.st_category.key,
              // TODO: Fetch products
              products: [],
            }}
            category_link={{
              linkText: content.data.st_category_link.data.lt_text,
              href: getProductLink("TODO"),
            }}
            headline={content.data.st_headline}
            text={content.data.st_text[0].content}
            teaserTextStart={content.data.st_text_alignment.identifier === "left"}
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

  return <div className="my-4">{<SectionComponent />}</div>;
};

export { Section };
