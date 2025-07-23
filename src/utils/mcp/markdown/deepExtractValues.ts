import type { FirstSpiritInlineInput } from "../firstSpirit/processGenericTemplate";
import { extractFormattedText } from "./formattedText";

export type RichTextNode = {
  type: "text" | "paragraph" | "listitem" | string;
  content?: RichTextNode[];
  data?: {
    format?: "bold" | "italic" | string;
    [key: string]: unknown;
  };
};

/**
 * Traverses a deeply nested FirstSpirit data object,
 * extracts meaningful text content while skipping blacklisted fields,
 * and returns it as an array of formatted strings.
 */
export const deepExtractValues = (
  data: FirstSpiritInlineInput,
  blacklist: string[],
  path: string[] = []
): string[] => {
  const result: string[] = [];

  /**
   * Handles nodes of type "list" by extracting their items' text,
   * formatting each as a markdown-style bullet point.
   */
  const handleList = (node: { content: RichTextNode[] }) => {
    const listItems: string[] = [];

    for (const item of node.content ?? []) {
      if (item.type === "listitem") {
        const text = extractFormattedText(item.content ?? []);
        if (text.trim()) listItems.push(`- ${text.trim()}`);
      }
    }

    if (listItems.length) {
      result.push(...listItems);
    }
  };

  /**
   * Handles "paragraph" nodes by checking for nested list content.
   * If not a list, it flattens and formats the text and adds it to the result with a key path.
   */
  const handleParagraph = (node: { content: { type: string }[] }, currentPath: string[]) => {
    const hasList =
      Array.isArray(node.content) && node.content.some((c: { type: string }) => c.type === "list");
    if (hasList) {
      collectValues(node.content, currentPath);
    } else {
      const text = extractFormattedText(node.content);
      if (text.trim()) {
        result.push(`${currentPath.join(".")}: ${text}`);
      }
    }
  };

  /**
   * Recursively traverses any kind of input node (array, object, or primitive),
   * collecting values unless the key is blacklisted.
   */
  // biome-ignore lint/suspicious/noExplicitAny: the node could contain every type
  const collectValues = (node: any, currentPath: string[]): void => {
    if (Array.isArray(node)) {
      for (const item of node) collectValues(item, currentPath);
    } else if (typeof node === "object" && node !== null) {
      if (node.type === "list") {
        handleList(node);
        return;
      }

      if (node.type === "paragraph") {
        handleParagraph(node, currentPath);
        return;
      }

      for (const [key, value] of Object.entries(node)) {
        if (blacklist.includes(key)) continue;
        collectValues(value, [...currentPath, key]);
      }
    } else if (["string", "number", "boolean"].includes(typeof node)) {
      result.push(`${currentPath.join(".")}: ${node}`);
    }
  };

  collectValues(data, path);
  return result;
};
