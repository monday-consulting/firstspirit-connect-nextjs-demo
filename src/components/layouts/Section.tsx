import type { FirstSpiritSection } from "@/lib/gql/generated/graphql";
import { getConnectorLink } from "@/utils/links";
import type { FeatureProps } from "../features/Features/Feature";
import type { StepsItemProps } from "../features/Steps/StepsItem";
import type { AccordionProps } from "../sections/Accordion";
import { FAQSection } from "../sections/FAQSection";
import { Features } from "../sections/Features";
import { PartsTable } from "../sections/PartsTable";
import { ProductCategoryTeaser } from "../sections/ProductCategoryTeaser";
import { Stage } from "../sections/Stage";
import { Steps } from "../sections/Steps";
import { Teaser } from "../sections/Teaser";
import { TextImage, type TextImageLayout } from "../sections/TextImage";

export type SectionProps = {
  section: Pick<FirstSpiritSection, "__typename" | "id" | "data" | "previewId">;
};

function getSectionComponent(section: SectionProps["section"]) {
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
          previewId={section.previewId}
        />
      );
    case "FirstSpiritProductCategoryTeaser":
      return (
        <ProductCategoryTeaser
          category={{
            type: section.data.stCategory?.key || "",
            name: section.data.stCategory?.value || "",
            id: section.data.stCategory?.key || "",
            products: section.data.stCategory?.items?.[0]?.data.items || [],
          }}
          link={getConnectorLink(section.data.stCategoryLink?.data)}
          headline={section.data.stHeadline || ""}
          text={{ content: section.data.stText }}
          teaserTextStart={section.data.stTextAlignment?.key === "left"}
          previewId={section.previewId}
        />
      );
    case "FirstSpiritSteps": {
      let stepIndex = 0;
      const stepItems = section.data.stSteps?.flatMap((step) => {
        if (
          step?.__typename === "FirstSpiritSection" &&
          step.data.__typename === "FirstSpiritStepsItem"
        ) {
          return [
            {
              title: step.data.stTitle,
              text: step.data.stText,
              index: ++stepIndex,
            },
          ];
        }
        return [];
      }) as StepsItemProps[];
      return (
        <Steps
          headline={section.data.stHeadline || ""}
          subline={section.data.stSubline || ""}
          stepsItems={stepItems || []}
          previewId={section.previewId}
        />
      );
    }
    case "FirstSpiritAccordion": {
      const entries = section.data.stAccordion?.flatMap((entry) => {
        if (
          entry?.__typename === "FirstSpiritSection" &&
          entry.data.__typename === "FirstSpiritAccordionItem"
        ) {
          return [
            {
              title: entry.data.stTitle,
              content: entry.data.stContent,
            },
          ];
        }
        return [];
      }) as AccordionProps[];
      return (
        <FAQSection
          headline={section.data.stHeadline || ""}
          subline={section.data.stSubline}
          entries={entries || []}
          previewId={section.previewId}
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
          previewId={section.previewId}
        />
      );
    }
    case "FirstSpiritFeatures": {
      const features = section.data.stFeatures?.flatMap((feature) => {
        if (
          feature?.__typename === "FirstSpiritSection" &&
          feature.data.__typename === "FirstSpiritFeature"
        ) {
          return [
            {
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
            },
          ];
        }
        return [];
      }) as FeatureProps[];
      return (
        <Features
          headline={section.data.stHeadline || ""}
          text={section.data.stText}
          features={features || []}
          previewId={section.previewId}
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
          previewId={section.previewId}
        />
      );
    case "FirstSpiritTable":
      return (
        <PartsTable
          tableContent={section.data.stTable || []}
          headline={section.data.stHeadline || undefined}
          text={section.data.stText || undefined}
          previewId={section.previewId}
        />
      );
    default:
      return undefined;
  }
}

const Section = ({ section }: SectionProps) => {
  return <section className="my-4">{getSectionComponent(section)}</section>;
};

export { Section };
