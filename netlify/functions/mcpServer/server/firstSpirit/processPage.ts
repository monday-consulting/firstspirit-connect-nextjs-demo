/**
 * Main function to convert FirstSpirit page and product content to markdown
 * Orchestrates the entire conversion process
 */

import type { Maybe } from "graphql/jsutils/Maybe";
import type {
  FirstSpiritInlinePageUnion8F4Ef8C0,
  FirstSpiritPage,
  FirstSpiritPageBody,
  FirstSpiritSection,
} from "@/lib/gql/generated/graphql";
import { templates } from "../markdown/templates";
import { processFirstSpirintInlineInput } from "./processGenericTemplate";

/**
 * Processes a FirstSpirit page and converts it to markdown
 * Handles different page types and their content structure
 */
export const processFirstSpiritPage = async (
  pageData: FirstSpiritInlinePageUnion8F4Ef8C0,
  pageContent: Maybe<FirstSpiritPage>
): Promise<string> => {
  const parts: string[] = [];

  // Process standard page template if applicable
  if (pageData.__typename === "FirstSpiritStandard") {
    parts.push(templates.standardPage(pageData));
  }

  // Process page bodies if they exist
  if (pageContent?.pageBodies) {
    const pageBodyMarkdown = await processFirstSpiritPageBodies(pageContent.pageBodies);
    parts.push(pageBodyMarkdown);
  }

  return parts.join("");
};

/**
 * Processes page body sections and converts them to markdown
 */
export const processFirstSpiritPageBodies = async (
  pageBodies: Maybe<FirstSpiritPageBody>[]
): Promise<string> => {
  const sectionPromises: Promise<string>[] = [];

  for (const pageBody of pageBodies) {
    const children = pageBody?.children ?? [];
    for (const child of children) {
      if (child && child.__typename === "FirstSpiritSection") {
        sectionPromises.push(sectionProcessing(child));
      }
    }
  }

  const results = await Promise.all(sectionPromises);
  return results.join("");
};

/**
 * Processes a FirstSpirit section and its nested subsections
 * Handles both section data and nested section hierarchies
 */
export const sectionProcessing = async (section: FirstSpiritSection): Promise<string> => {
  const markdownParts: string[] = [];

  // Process section data
  if (section.data) {
    const dataMarkdown = processFirstSpirintInlineInput(section.data);
    markdownParts.push(dataMarkdown);
  }

  // Process nested subsections in parallel
  if (section.section) {
    const validSubsections = section.section.filter(
      (subsection): subsection is FirstSpiritSection => subsection !== null
    );
    const subsectionPromises = validSubsections.map((subsection) => sectionProcessing(subsection));

    const subsectionResults = await Promise.all(subsectionPromises);
    markdownParts.push(...subsectionResults);
  }

  return markdownParts.join("");
};
