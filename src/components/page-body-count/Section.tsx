import type { Section as FsxaSection } from "fsxa-api";
import { ProductCategoryTeaser } from "../section/ProductCategoryTeaser";
import { getProductLink } from "@/utils/links";
import { Stage } from "../section/Stage";
import { Teaser } from "../section/Teaser";
import { Features } from "../section/Features";
import { FAQSection } from "../section/FAQSection";

export type SectionProps = {
  content: FsxaSection;
};

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
        return (
          <FAQSection
            headline={content.data.st_headline}
            subline={content.data.st_subline}
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            entries={content.data.st_accordion.map((entry: any) => ({
              title: entry.data.st_title,
              content: entry.data.st_content,
            }))}
          />
        );
      case "stage":
        return (
          <Stage
            headline={content.data.st_headline}
            subline={content.data.st_subheadline}
            image={{
              src: content.data.st_image.resolutions.ORIGINAL.url,
              alt: content.data.st_image_alt_text,
            }}
            // TODO: resolve lt_link reference
            cta={{
              label: content.data.st_cta?.data.lt_text,
              href: content.data.st_cta?.data.lt_link,
            }}
          />
        );
      case "features":
        return (
          <Features
            headline={content.data.st_headline}
            text={content.data.st_text}
            // TODO: Typesafety missing
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            features={content.data.st_features.map((feature: any) => ({
              link: {
                href: feature.data.st_link.data.lt_link,
                label: feature.data.st_link.data.lt_text,
              },
              image: {
                src: feature.data.st_image.resolutions.ORIGINAL.url,
                alt: feature.data.st_image_alt_text,
              },
              title: feature.data.st_title,
              text: feature.data.st_text,
              id: feature.id,
            }))}
          />
        );
      case "interesting_facts":
        return "SectionInterestingFacts";
      case "products.category_products":
        return "SectionProductCategory";
      case "smartliving.product":
        return "SectionProduct";
      case "teaser":
        return (
          <Teaser
            headline={content.data.st_headline}
            claim={content.data.st_subhealine}
            text={content.data.st_text}
            imageStart={content.data.st_layout.key === "text-image"}
            image={{
              src: content.data.st_image.resolutions.ORIGINAL.url,
              alt: content.data.st_image_alt_text,
            }}
            cta={
              content.data.st_cta && {
                label: content.data.st_cta.data.lt_text,
                href: content.data.st_cta.data.lt_link,
              }
            }
          />
        );
      case "featured_products":
        return "SectionFeaturedProducts";
      default:
        return undefined;
    }
  };

  return <section className="my-4">{<SectionComponent />}</section>;
};

export { Section };
