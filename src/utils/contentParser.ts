// Function to extract plain text from a structured JSON representation of text (rich text)
export const extractStTextContent = (stText: JSON): string => {
  if (!Array.isArray(stText)) return "";

  const result: string[] = [];

  const processContent = (content: JSON): string => {
    if (!Array.isArray(content)) return "";

    return content
      .map((item) => {
        // Handle plain text nodes
        if (item.type === "text" && typeof item.content === "string") {
          return item.content;
        }

        // Handle bolded text
        if (item.type === "text" && item.data?.format === "bold" && Array.isArray(item.content)) {
          const boldContent = item.content.map((c: { content: string }) => c.content).join("");
          return `**${boldContent}**`;
        }

        // Handle line break nodes
        if (item.type === "linebreak") {
          return "\n";
        }

        // Handle list items with bold at beginning
        if (item.type === "listitem" && Array.isArray(item.content)) {
          const first = item.content[0];
          let text = "";

          if (
            first?.type === "text" &&
            first.data?.format === "bold" &&
            Array.isArray(first.content)
          ) {
            const boldText = first.content.map((c: { content: string }) => c.content).join("");
            text += `**${boldText}** `;

            // Now extract the rest of the list item (after the bold part)
            const rest = item.content
              .slice(1)
              .map((child: { content: JSON }) => {
                // Handle nested bold or text or nested structure
                if (Array.isArray(child.content)) {
                  return processContent(child.content);
                }
                if (typeof child.content === "string") {
                  return child.content;
                }
                return "";
              })
              .join("");

            return `${text}${rest}\n\n`;
          }

          // fallback if not bold at the beginning
          return item.content.map(processContent).join("");
        }

        // Recursively process nested content
        if (Array.isArray(item.content)) {
          return processContent(item.content);
        }

        return "";
      })
      .join("");
  };

  // Iterate over each paragraph-level block
  stText.forEach((paragraph, i) => {
    if (paragraph?.type && Array.isArray(paragraph.content)) {
      const paragraphText = processContent(paragraph.content);
      if (paragraphText.trim()) result.push(paragraphText.trim());
    }
  });

  return result.join("\n\n");
};

// Recursively extract plain text from a structured cell object
export const extractStTextFromCell = (cell: { content: string; type: string }): string => {
  if (!cell) return "";

  if (typeof cell === "string") return cell;

  if (cell.type === "text" && typeof cell.content === "string") {
    return cell.content;
  }

  // If the content is an array (nested rich text structure), process each item recursively
  if (Array.isArray(cell.content)) {
    return cell.content.map(extractStTextFromCell).join("");
  }

  // If the content is a nested object, process it recursively
  if (typeof cell.content === "object") {
    return extractStTextFromCell(cell.content);
  }

  return "";
};

// Converts a structured table (rich-text JSON) into a Markdown-formatted table string
interface TableCell {
  content: string;
  type: string;
}

interface TableRow {
  type: string;
  content: TableCell[];
}

interface Table {
  content: TableRow[];
}

export const extractStTableContent = (table: Table[]): string => {
  if (!Array.isArray(table)) return "";

  const rows: string[] = [];

  // Safely iterate over the first element's rows (assuming it contains the actual table content)
  for (const [index, row] of table[0]?.content.entries() ?? []) {
    if (row.type !== "tr" || !Array.isArray(row.content)) continue;

    const columns = row.content.map((cell) => {
      const text = extractStTextFromCell(cell).trim();
      return text.replace(/\|/g, "\\|"); // Markdown-safe
    });

    // Skip loop
    if (columns.every((t: string) => t === "")) continue;

    // Push Markdown-Style text
    rows.push(`| ${columns.join(" | ")} |`);

    // Push --- line after header
    if (index === 0) {
      rows.push(`| ${columns.map(() => "---").join(" | ")} |`);
    }
  }

  return rows.join("\n");
};

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
