import type { RichTextNode } from "./deepExtractValues";

/**
 * Recursively extracts and formats rich text content from FirstSpirit nodes.
 *
 * Example transformation:
 *   '**Actuators**: Lights and blinds' + '**Sensors**: Temperature' →
 *   - **Actuators**: Lights and blinds
 *   - **Sensors**: Temperature
 */
export const extractFormattedText = (content: RichTextNode): string => {
  if (!Array.isArray(content)) return "";

  const raw = content
    .map((node) => {
      if (node.type === "text") {
        const text = Array.isArray(node.content)
          ? extractFormattedText(node.content)
          : (node.content ?? "");

        return text;
      }

      return "";
    })
    .join("");

  return raw;
};
