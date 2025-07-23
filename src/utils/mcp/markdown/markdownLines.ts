import { renderLine } from "@/utils/strings";
import { formatKey } from "./formatKey";

/**
 * Formats an array of raw key-value strings into human-readable Markdown lines.
 *
 * Example:
 *   Input:  ["tt_name: Outdoor Camera"]
 *   Output: ["**Name:** Outdoor Camera"]
 */
export const formatMarkdownLines = (lines: string[]): string[] => {
  return lines.map((entry, index) => {
    const splitIndex = entry.indexOf(": ");
    if (splitIndex === -1) return "";

    const rawKey = entry.slice(0, splitIndex);
    const value = entry.slice(splitIndex + 2);

    const label = formatKey(rawKey).replace(/\b\w/g, (c) => c.toUpperCase()); // Uppercase the first letter of each word
    const formattedLabel = label.startsWith("-") ? `${label}: ` : `**${label}:** `;

    return renderLine(formattedLabel, value);
  });
};
