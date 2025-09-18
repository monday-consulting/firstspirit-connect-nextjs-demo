import { denylist } from "../firstSpirit/denylist";
import type { FirstSpiritInlineInput } from "../firstSpirit/processGenericTemplate";
import { assembleMarkdownParts } from "./assembleMarkdownParts";
import { deepExtractValues } from "./deepExtractValues";
import { formatMarkdownLines } from "./markdownLines";
import { extractIfContainsTable } from "./tableDetection";

/**
 * Generate a markdown based on the given input
 */
export const genericTemplate = (data: FirstSpiritInlineInput): string => {
  // Extract key-value pairs from FirstSpirit data, filtering out denied keys
  const lines = deepExtractValues(data, denylist);

  // Convert the extracted lines into formatted Markdown strings
  const markdownLines = formatMarkdownLines(lines);

  // Detect if the content contains a table and return it separately if found
  const table = extractIfContainsTable(lines, markdownLines);
  if (table) {
    const nonTableLines = lines.filter((line) => !line.startsWith("stTable"));
    const formattedNonTable = formatMarkdownLines(nonTableLines);

    // Combine the non-table Markdown and the extracted table into one final block
    return assembleMarkdownParts([...formattedNonTable, "", table]);
  }

  // Assemble the final Markdown output
  return assembleMarkdownParts([markdownLines.join("\n\n")]);
};
