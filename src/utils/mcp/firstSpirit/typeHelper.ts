/**
 * Main function to convert FirstSpirit page and product content to markdown
 * Orchestrates the entire conversion process
 */

import { templates } from "@/gql/documents/mcp";
import type {
  FirstSpiritInlinePageUnion8F4Ef8C0,
  FirstSpiritPage,
  FirstSpiritPageBody,
  FirstSpiritInlineSectionUnion638Da777,
  FirstSpiritSection,
} from "@/gql/generated/graphql";
import { Effect } from "effect";
import type { Maybe } from "graphql/jsutils/Maybe";

/**
 * Processes a FirstSpirit page and converts it to markdown
 * Handles different page types and their content structure
 */
export const processFirstSpiritPage = (
  pageData: FirstSpiritInlinePageUnion8F4Ef8C0,
  pageContent: Maybe<FirstSpiritPage>
): Effect.Effect<string> => {
  return Effect.all([
    ...(pageData.__typename === "FirstSpiritStandard"
      ? [Effect.succeed(templates.standardPage(pageData))]
      : []),

    ...(pageContent?.pageBodies ? [processFirstSpiritPageBodies(pageContent.pageBodies)] : []),
  ]).pipe(Effect.map((parts) => parts.join("")));
};

/**
 * Processes page body sections and converts them to markdown
 * Handles different section types including references and datasets
 */
export const processFirstSpiritPageBodies = (
  pageBodies: Maybe<FirstSpiritPageBody>[]
): Effect.Effect<string> =>
  Effect.gen(function* (_) {
    const pageBodyMarkdown: string[] = [];

    for (const pageBody of pageBodies) {
      const children = pageBody?.children ?? [];
      for (const child of children) {
        if (!child) continue;

        switch (child.__typename) {
          case "FirstSpiritSection": {
            const sectionMd = yield* sectionProcessing(child);
            pageBodyMarkdown.push(sectionMd);
            break;
          }

          case "FirstSpiritContent2Section": {
            console.warn("⚠️ Skipping unimplemented FS reference section");
            if (child.fsReferences) {
              for (const reference of child.fsReferences) {
                // TODO: get Pages in FS Reference
                // const refMd = yield* processFirstSpiritPage(reference?.ref?.data, reference?.ref);
                // pageBodyMarkdown.push(refMd);
              }
            }
            break;
          }

          case "FirstSpiritDataset": {
            console.warn("⚠️ Skipping unimplemented dataset section");
            // TODO: Implement dataset processing
            break;
          }

          default: {
            console.warn(`⚠️ Unknown section type: ${child.__typename}`);
            break;
          }
        }
      }
    }

    return pageBodyMarkdown.join("");
  });
/**
 * Processes different types of FirstSpirit sections
 * Uses template functions to generate appropriate markdown
 */
export const processFirstSpiritInlineSectionUnion = (
  section: FirstSpiritInlineSectionUnion638Da777
): Effect.Effect<string> => {
  switch (section.__typename) {
    case "FirstSpiritTeaser":
      return Effect.succeed(templates.teaser(section));

    case "FirstSpiritStage":
      return Effect.succeed(templates.stage(section));

    case "FirstSpiritTextImage":
      return Effect.succeed(templates.textImage(section));

    case "FirstSpiritProductCategoryTeaser":
      return Effect.succeed(templates.productCategoryTeaser(section));

    case "FirstSpiritAccordion":
      return Effect.succeed(templates.accordion(section));

    case "FirstSpiritSteps":
      return Effect.succeed(templates.steps(section));

    case "FirstSpiritFeatures":
      return Effect.succeed(templates.features(section));

    case "FirstSpiritGoogleMaps":
      return Effect.succeed(templates.googleMaps(section));

    case "FirstSpiritNewsOverview":
      return Effect.succeed(templates.newsOverview(section));

    case "FirstSpiritSmartlivingNews":
      return Effect.succeed(templates.smartLivingNews(section));

    case "FirstSpiritSmartlivingLocation":
      return Effect.succeed(templates.smartLivingLocation(section));

    case "FirstSpiritTable":
      return Effect.succeed(templates.table(section));

    case "FirstSpiritSmartlivingProduct":
      return Effect.succeed(templates.smartLivingProduct(section));

    default:
      return Effect.sync(() => {
        console.warn(`⚠️ Unhandled section type: ${section.__typename}`);
        return "";
      });
  }
};

/**
 * Processes a FirstSpirit section and its nested subsections
 * Handles both section data and nested section hierarchies
 */
export const sectionProcessing = (section: FirstSpiritSection): Effect.Effect<string> =>
  Effect.gen(function* (_) {
    const markdownParts: string[] = [];

    // Process section data
    if (section.data) {
      const dataMarkdown = yield* _(processFirstSpiritInlineSectionUnion(section.data));
      markdownParts.push(dataMarkdown);
    }

    // Process nested subsections
    if (section.section) {
      for (const subsection of section.section) {
        if (subsection) {
          const subMarkdown = yield* _(sectionProcessing(subsection));
          markdownParts.push(subMarkdown);
        }
      }
    }

    return markdownParts.join("");
  });
