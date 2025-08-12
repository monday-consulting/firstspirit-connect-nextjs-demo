import { extractTableFromContent } from "./tableFromContent";

/**
 * Checks whether the input lines contain any table-related data (e.g., lines starting with "stTable").
 * If a table is detected, it extracts and returns the corresponding table markdown from the given content.
 * Otherwise, it returns null.
 */
export function extractIfContainsTable(lines: string[], markdownLines: string[]): string | null {
  const containsTableData = lines.some((line) => line.startsWith("stTable"));
  if (!containsTableData) return null;

  return extractTableFromContent(markdownLines);
}
