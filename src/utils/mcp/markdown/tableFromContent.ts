/**
 * Scans the given markdown lines for pairs of "**Content:**" entries where the second is a value (e.g. a number or percentage),
 * and constructs a Markdown table from these pairs.
 *
 * For example:
 *   "**Content:** Energy Efficiency"
 *   "**Content:** 95%"
 * Will become:
 *   | Energy Efficiency | 95% |
 */
export function extractTableFromContent(lines: string[]): string | null {
  const contentPairs: [string, string][] = [];

  for (let i = 0; i < lines.length - 1; i++) {
    const current = lines[i];
    const next = lines[i + 1];

    const currentMatch = current.match(/^\*\*Content:\*\* (.+)$/);
    const nextMatch = next.match(/^\*\*Content:\*\* (.+)$/);

    // If both entries are "Content" and the second one looks like a value (for example -> %)
    if (currentMatch && nextMatch && /^[\d.,]+\%?$/.test(nextMatch[1])) {
      contentPairs.push([currentMatch[1], nextMatch[1]]);
      i++;
    }
  }

  if (contentPairs.length === 0) return null;

  // Build Markdown-Table
  const rows = contentPairs.map(([label, value]) => `| ${label} | ${value} |`);
  const header = "| Label | Value |\n|---------|-------|";

  return [header, ...rows].join("\n");
}
