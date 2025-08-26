import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export type CreateSystemPromptProps = {
  sysPreset: string;
  tools: Tool[];
};

export const toJSONSafe = (value: unknown) => {
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
};

const section = (title: string, bodyLines: string[]): string =>
  bodyLines.length ? `${title}\n${bodyLines.join("\n")}` : "";

const renderTools = (tools: Tool[]) =>
  section(
    `TOOLS (${tools.length}):`,
    tools.map((t) => `- ${t.name}: ${t.description ?? ""}`)
  );

export const createSystemPrompt = ({ sysPreset, tools }: CreateSystemPromptProps): string => {
  const header = `${sysPreset}\n\nCURRENTLY AVAILABLE MCP CAPABILITIES:`;

  // Build sections only when they have content, then join with blank lines.
  const parts = [header, tools.length ? renderTools(tools) : ""].filter(Boolean);

  return parts.join("\n\n");
};
