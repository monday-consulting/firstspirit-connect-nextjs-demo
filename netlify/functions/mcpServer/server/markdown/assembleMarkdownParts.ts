export const assembleMarkdownParts = (parts: (string | null | undefined)[]): string => {
  if (parts.some((p) => p == null)) {
    return "";
  }
  return (
    parts
      // Filter out non-strings and empty/whitespace-only strings
      .filter((p) => typeof p === "string" && p.trim() !== "")
      // Join the remaining parts using two newlines (Markdown paragraph spacing)
      .join("\n\n")
  );
};
