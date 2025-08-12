/*
 * Generates a dynamic description based on the first paragraph of the content.
 *
 * - If the content has a paragraph, the first one (that isn't a heading) is used.
 * - If it's longer than 150 characters, it's truncated with an ellipsis.
 * - If no paragraph is found, a fallback is used or a default message with the name.
 */
export const generateDynamicDescription = ({
  name,
  content,
  fallback,
}: {
  name: string;
  content: string;
  fallback?: string;
}): string => {
  // First try to extract a "**Description:** ..." line
  const descriptionMatch = content.match(/\*\*Description:\*\*\s*(.+)/);
  if (descriptionMatch) {
    const desc = descriptionMatch[1].trim();
    return truncateDescription(desc);
  }

  // Otherwise fallback to first paragraph extraction
  const firstParagraph = extractFirstParagraph(content);
  if (firstParagraph) {
    return truncateDescription(firstParagraph);
  }

  return fallback || `Technical documentation for ${name}.`;
};

const extractFirstParagraph = (markdown: string): string | null => {
  return (
    markdown
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .find((p) => p && !p.startsWith("#")) ?? null
  );
};

const truncateDescription = (desc: string, max = 150) =>
  desc.length > max ? `${desc.slice(0, max - 3).trim()}...` : desc;
