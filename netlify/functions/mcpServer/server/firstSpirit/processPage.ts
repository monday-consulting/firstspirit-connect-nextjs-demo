/**
 * Main function to convert FirstSpirit page and product content to markdown
 * Orchestrates the entire conversion process
 */

import type {
  FirstSpiritInlinePageUnion8F4Ef8C0,
  FirstSpiritPage,
  FirstSpiritPageBody,
  FirstSpiritSection,
} from "@/lib/gql/generated/graphql";
import { Effect } from "effect";
import type { Maybe } from "graphql/jsutils/Maybe";
import { templates } from "../markdown/templates";
import { processFirstSpirintInlineInput } from "./processGenericTemplate";

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
        if (child.__typename === "FirstSpiritSection") {
          const sectionMd = yield* sectionProcessing(child);
          pageBodyMarkdown.push(sectionMd);
        }
      }
    }

    return pageBodyMarkdown.join("");
  });

/**
 * Processes a FirstSpirit section and its nested subsections
 * Handles both section data and nested section hierarchies
 */
export const sectionProcessing = (section: FirstSpiritSection): Effect.Effect<string> =>
  Effect.gen(function* (_) {
    const markdownParts: string[] = [];

    // Process section data
    if (section.data) {
      const dataMarkdown = yield* _(processFirstSpirintInlineInput(section.data));
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
