import { ProductCategoryTeaser } from "../section/ProductCategoryTeaser";
import { Teaser } from "../section/Teaser";
import { FAQSection } from "../section/FAQSection";
import { Steps } from "../section/Steps";
import { TextImage } from "../section/TextImage";
import type { FirstSpiritSection } from "@/gql/generated/graphql";
import { Stage } from "../section/Stage";
import { Features } from "../section/Features";

export type SectionProps = {
  section: FirstSpiritSection;
};

const Section = ({ section }: SectionProps) => {
  const SectionComponent = () => {
    switch (section.sectionType) {
      case "smartliving.product_overview":
        return "SectionProductOverview";
      case "text_image":
        return (
          <TextImage
            headline={section.data.st_headline}
            subheadline={{ content: section.data.st_subheadline }}
            text={{ content: section.data.st_text }}
            twoColumn
            layout={section.data.st_layout.key}
            image={{
              src: section.data.st_image.resolutions.ORIGINAL.url,
              alt: section.data.st_image_alt_text,
            }}
          />
        );
      case "product_category_teaser":
        return (
          <ProductCategoryTeaser
            category={{
              type: section.data.st_category.type,
              name: section.data.st_category.value,
              id: section.data.st_category.key,
            }}
            group_link={{
              label: section.data.st_category_link.data.lt_text,
            }}
            headline={section.data.st_headline}
            text={{ content: section.data.st_text }}
            teaserTextStart={section.data.st_text_alignment.identifier === "left"}
          />
        );
      case "steps":
        return (
          <Steps
            headline={section.data.st_headline}
            subline={section.data.st_subline}
            stepsItems={section.data.st_steps.map(
              // biome-ignore lint/suspicious/noExplicitAny: No type definitions
              (step: any, index: number) => ({
                title: step.data.st_title,
                text: { content: step.data.st_text },
                index: index + 1,
              })
            )}
          />
        );
      case "accordion":
        return (
          <FAQSection
            headline={section.data.st_headline}
            subline={section.data.st_subline}
            entries={section.data.st_accordion.map(
              // biome-ignore lint/suspicious/noExplicitAny: No type definitions
              (entry: any) => ({
                title: entry.data.st_title,
                content: { content: entry.data.st_content },
              })
            )}
          />
        );
      case "stage":
        return (
          <Stage
            headline={section.data.st_headline}
            subline={section.data.st_subheadline}
            image={{
              src: section.data.st_image.resolutions.ORIGINAL.url,
              alt: section.data.st_image_alt_text,
            }}
            cta={{
              label: section.data.st_cta?.data.lt_text,
              // TODO: resolve section.data.st_cta?.data.lt_link
              href: "#",
            }}
            sectionId={section.id}
          />
        );
      case "features":
        return (
          <Features
            headline={section.data.st_headline}
            text={{ content: section.data.st_text }}
            features={section.data.st_features.map(
              // biome-ignore lint/suspicious/noExplicitAny: No type definitions
              (feature: any) => ({
                link: {
                  // TODO: reslove feature.data.st_link.data.lt_link
                  href: "#",
                  label: feature.data.st_link.data.lt_text,
                },
                image: {
                  src: feature.data.st_image.resolutions.ORIGINAL.url,
                  alt: feature.data.st_image_alt_text,
                },
                title: feature.data.st_title,
                text: { content: feature.data.st_text },
                id: feature.id,
              })
            )}
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
            headline={section.data.st_headline}
            claim={section.data.st_subhealine}
            text={{ content: section.data.st_text }}
            imageStart={section.data.st_layout.key === "text-image"}
            image={{
              src: section.data.st_image.resolutions.ORIGINAL.url,
              alt: section.data.st_image_alt_text,
            }}
            cta={
              section.data.st_cta && {
                label: section.data.st_cta.data.lt_text,
                // TODO: resolve section.data.st_cta.data.lt_link
                href: "#",
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
