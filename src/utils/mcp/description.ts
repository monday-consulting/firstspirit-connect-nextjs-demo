export const generateDynamicDescription = ({
  name,
  content,
  fallback,
}: {
  name: string;
  content: string;
  fallback?: string;
}): string => {
  const firstParagraph = extractFirstParagraph(content);
  if (firstParagraph) {
    return firstParagraph.length > 150 ? `${firstParagraph.slice(0, 147)}...` : firstParagraph;
  }

  return fallback || `Technical documentation for ${name}.`;
};

const extractFirstParagraph = (markdown: string): string | null => {
  return (
    markdown
      .split(/\n\s*\n/) // split by empty lines
      .map((p) => p.trim())
      .find((p) => p && !p.startsWith("#")) || null
  );
};
