import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export type CreateSystemPromptProps = {
  sysPreset: string;
  tools: Tool[];
};

/**
 * Safely converts a value to JSON string, falling back to string conversion on error
 * @param value - The value to convert to JSON
 * @returns JSON string representation or string fallback
 */
export const toJSONSafe = (value: unknown): string => {
  try {
    return JSON.stringify(value, null, 2);
  } catch (error) {
    console.warn(
      "Failed to stringify value to JSON:",
      error instanceof Error ? error.message : String(error)
    );
    return String(value);
  }
};

/**
 * Creates a formatted section with title and body lines
 * @param title - Section title
 * @param bodyLines - Array of body lines to include
 * @returns Formatted section string or empty string if no body lines
 */
const section = (title: string, bodyLines: string[]): string =>
  bodyLines.length ? `${title}\n${bodyLines.join("\n")}` : "";

/**
 * Renders MCP tools as a formatted section
 * @param tools - Array of MCP tools to render
 * @returns Formatted tools section string
 */
const renderTools = (tools: Tool[]): string =>
  section(
    `TOOLS (${tools.length}):`,
    tools.map((t) => `- ${t.name}: ${t.description ?? "No description available"}`)
  );

/**
 * Creates a comprehensive system prompt including base preset and MCP capabilities
 * @param props - Configuration object with system preset and tools
 * @returns Complete system prompt string with MCP tool information
 */
export const createSystemPrompt = ({ sysPreset, tools }: CreateSystemPromptProps): string => {
  if (!sysPreset || typeof sysPreset !== "string") {
    throw new Error("System preset must be a non-empty string");
  }

  const header = `${sysPreset}\n\nCURRENTLY AVAILABLE MCP CAPABILITIES:`;

  // Build sections only when they have content, then join with blank lines.
  const parts = [header, tools.length ? renderTools(tools) : ""].filter(Boolean);

  return parts.join("\n\n");
};
