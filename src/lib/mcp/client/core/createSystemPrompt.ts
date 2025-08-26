import type { Prompt, Tool } from "@modelcontextprotocol/sdk/types.js";

export type CreateSystemPromptProps = {
  sysPreset: string;
  tools: Tool[];
  prompts: Prompt[];
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

const renderPrompts = (prompts: Prompt[]) =>
  section(
    `PROMPT TEMPLATES (${prompts.length}):`,
    prompts.map((p) => {
      const args = p.arguments?.length
        ? ` (args: ${p.arguments.map((a) => `${a.name}${a.required ? "*" : ""}`).join(", ")})`
        : "";
      return `- ${p.name}: ${p.description || "No description"}${args}`;
    })
  );

export const createSystemPrompt = ({
  sysPreset,
  tools,
  prompts,
}: CreateSystemPromptProps): string => {
  const header = `${sysPreset}\n\nCURRENTLY AVAILABLE MCP CAPABILITIES:`;

  // Build sections only when they have content, then join with blank lines.
  const parts = [
    header,
    tools.length ? renderTools(tools) : "",
    prompts.length ? renderPrompts(prompts) : "",
  ].filter(Boolean);

  return parts.join("\n\n");
};
