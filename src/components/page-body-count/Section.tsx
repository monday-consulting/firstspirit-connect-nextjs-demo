import { ProductCategoryTeaser } from "../section/ProductCategoryTeaser";
import { Teaser } from "../section/Teaser";
import { FAQSection } from "../section/FAQSection";
import { Steps } from "../section/Steps";
import { TextImage, type TextImageLayout } from "../section/TextImage";
import type { FirstSpiritSection } from "@/gql/generated/graphql";
import { Stage } from "../section/Stage";
import { Features } from "../section/Features";
import type { StepsItemProps } from "../elements/StepsItem";
import type { AccordionProps } from "../elements/Accordion";
import type { FeatureProps } from "../elements/Feature";

export type SectionProps = {
  section: Pick<FirstSpiritSection, "__typename" | "id" | "data">;
};

const Section = ({ section }: SectionProps) => {
  const SectionComponent = () => {
    switch (section.data.__typename) {
      case "FirstSpiritTextImage":
        return (
          <TextImage
            headline={section.data.stHeadline || ""}
            subheadline={{ content: section.data.stSubheadline }}
            text={section.data.stText}
            twoColumn
            layout={(section.data.stLayout?.key as TextImageLayout) || "text-image"}
            image={{
              src:
                (section.data.stImage?.__typename === "FirstSpiritImage" &&
                  section.data.stImage.resolutions?.original?.url) ||
                "",
              alt: section.data.stImageAltText || "",
            }}
          />
        );
      case "FirstSpiritProductCategoryTeaser":
        return (
          <ProductCategoryTeaser
            category={{
              type: section.data.stCategory?.key || "",
              name: section.data.stCategory?.value || "",
              id: section.data.stCategory?.key || "",
            }}
            group_link={{
              // TODO: links not resolved correctly
              label: section.data.stCategoryLink?.value || "",
            }}
            headline={section.data.stHeadline || ""}
            text={{ content: section.data.stText }}
            teaserTextStart={section.data.stTextAlignment?.key === "left"}
          />
        );
      case "FirstSpiritSteps": {
        const stepItems = section.data.stSteps
          ?.map((step, index) => {
            if (
              step?.__typename === "FirstSpiritSection" &&
              step.data.__typename === "FirstSpiritStepsItem"
            ) {
              return {
                title: step.data.stTitle,
                text: step.data.stText,
                index,
              } as StepsItemProps;
            }
          })
          .filter((item) => item != null);
        return (
          <Steps
            headline={section.data.stHeadline || ""}
            subline={section.data.stSubline || ""}
            stepsItems={stepItems || []}
          />
        );
      }
      case "FirstSpiritAccordion": {
        const entries = section.data.stAccordion
          ?.map((entry) => {
            if (
              entry?.__typename === "FirstSpiritSection" &&
              entry.data.__typename === "FirstSpiritAccordionItem"
            ) {
              return {
                title: entry.data.stTitle,
                content: entry.data.stContent,
              } as AccordionProps;
            }
          })
          .filter((item) => item != null);
        return (
          <FAQSection
            headline={section.data.stHeadline || ""}
            subline={section.data.stSubline}
            entries={entries || []}
          />
        );
      }
      case "FirstSpiritStage":
        return (
          <Stage
            headline={section.data.stHeadline || ""}
            subline={section.data.stSubheadline || ""}
            image={{
              src:
                (section.data.stImage?.__typename === "FirstSpiritImage" &&
                  section.data.stImage.resolutions?.original?.url) ||
                "",
              alt: "",
            }}
            cta={{
              // TODO: links not resolved correctly
              label: section.data.stCta?.key || "",
              href: "#",
            }}
            sectionId={section.id}
          />
        );
      case "FirstSpiritFeatures": {
        const features = section.data.stFeatures
          ?.map((feature) => {
            if (
              feature?.__typename === "FirstSpiritSection" &&
              feature.data.__typename === "FirstSpiritFeature"
            ) {
              return {
                title: feature.data.stTitle,
                text: feature.data.stText,
                link: {
                  // TODO: links not resolved correctly
                  label: feature.data.stLink?.key || "",
                  href: "#",
                },
                image: {
                  src:
                    (feature.data.stImage?.__typename === "FirstSpiritImage" &&
                      feature.data.stImage.resolutions?.original?.url) ||
                    "",
                  alt: feature.data.stImageAltText,
                },
              } as FeatureProps;
            }
          })
          .filter((item) => item != null);
        return (
          <Features
            headline={section.data.stHeadline || ""}
            text={section.data.stText}
            features={features || []}
          />
        );
      }
      case "FirstSpiritTeaser":
        return (
          <Teaser
            headline={section.data.stHeadline || ""}
            text={{ content: section.data.stText }}
            imageStart={(section.data.stLayout || "text-image") === "text-image"}
            image={{
              src:
                (section.data.stImage?.__typename === "FirstSpiritImage" &&
                  section.data.stImage.resolutions?.original?.url) ||
                "",
              alt: section.data.stImageAltText || "",
            }}
            cta={
              section.data.stCta
                ? {
                    // TODO: links not resolved correctly
                    label: section.data.stCta.key || "",
                    href: "#",
                  }
                : undefined
            }
          />
        );
      default:
        return undefined;
    }
  };

  return <section className="my-4">{<SectionComponent />}</section>;
};

export { Section };
