import { ProductCategoryTeaser } from "../sections/ProductCategoryTeaser";
import { Teaser } from "../sections/Teaser";
import { FAQSection } from "../sections/FAQSection";
import { Steps } from "../sections/Steps";
import { TextImage, type TextImageLayout } from "../sections/TextImage";
import type { FirstSpiritSection } from "@/gql/generated/graphql";
import { Stage } from "../sections/Stage";
import { Features } from "../sections/Features";
import type { StepsItemProps } from "../features/Steps/StepsItem";
import type { AccordionProps } from "../sections/Accordion";
import type { FeatureProps } from "../features/Features/Feature";
import { PartsTable } from "../sections/PartsTable";
import { getConnectorLink } from "@/utils/links";

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
            link={getConnectorLink(section.data.stCategoryLink?.data)}
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
                index: index + 1,
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
      case "FirstSpiritStage": {
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
            cta={section.data.stCta?.data ? getConnectorLink(section.data.stCta.data) : undefined}
            previewId={section.id}
          />
        );
      }
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
                link: feature.data.stLink?.data
                  ? getConnectorLink(feature.data.stLink.data)
                  : undefined,
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
            imageStart={(section.data.stLayout?.key || "text-image") === "text-image"}
            image={{
              src:
                (section.data.stImage?.__typename === "FirstSpiritImage" &&
                  section.data.stImage.resolutions?.original?.url) ||
                "",
              alt: section.data.stImageAltText || "",
            }}
            cta={section.data.stCta?.data ? getConnectorLink(section.data.stCta.data) : undefined}
            previewId={section.id}
          />
        );
      case "FirstSpiritTable":
        return (
          <PartsTable
            tableContent={section.data.stTable || []}
            headline={section.data.stHeadline || undefined}
            text={section.data.stText || undefined}
          />
        );
      default:
        return undefined;
    }
  };

  return <section className="my-4">{<SectionComponent />}</section>;
};

export { Section };
