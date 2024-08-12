import type { Section as FsxaSection } from "fsxa-api";
import { ProductCategoryTeaser } from "../section/ProductCategoryTeaser";
import { getProductLink } from "@/utils/links";
import { Stage } from "../section/Stage";
import { Teaser } from "../section/Teaser";
import { FAQSection } from "../section/FAQSection";
import { Features } from "../section/Features";
import { Steps } from "../section/Steps";
import { TextImage } from "../section/TextImage";

export type SectionProps = {
  content: FsxaSection;
};

const Section = ({ content }: SectionProps) => {
  const SectionComponent = () => {
    switch (content.sectionType) {
      case "smartliving.product_overview":
        return "SectionProductOverview";
      case "text_image":
        return (
          <TextImage
            headline={content.data.st_headline}
            subheadline={{ content: content.data.st_subheadline }}
            text={{ content: content.data.st_text }}
            twoColumn
            layout={content.data.st_layout.key}
            image={{
              src: content.data.st_image.resolutions.ORIGINAL.url,
              alt: content.data.st_image_alt_text,
            }}
          />
        );
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
            text={{ content: content.data.st_text }}
            teaserTextStart={content.data.st_text_alignment.identifier === "left"}
          />
        );
      case "steps":
        return (
          <Steps
            headline={content.data.st_headline}
            subline={content.data.st_subline}
            // biome-ignore lint/suspicious/noExplicitAny: No type definitions
            stepsItems={content.data.st_steps.map((step: any, index: number) => ({
              title: step.data.st_title,
              text: { content: step.data.st_text },
              index: index + 1,
            }))}
          />
        );
      case "accordion":
        return (
          <FAQSection
            headline={content.data.st_headline}
            subline={content.data.st_subline}
            // biome-ignore lint/suspicious/noExplicitAny: No type definitions
            entries={content.data.st_accordion.map((entry: any) => ({
              title: entry.data.st_title,
              content: { content: entry.data.st_content },
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
            text={{ content: content.data.st_text }}
            // TODO: Typesafety missing
            // biome-ignore lint/suspicious/noExplicitAny: No type definitions
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
              text: { content: feature.data.st_text },
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
            text={{ content: content.data.st_text }}
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
