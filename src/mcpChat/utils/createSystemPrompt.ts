import type { Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import type { PromptUseRecord, ResourceUseRecord } from "../lib/types";

export type CreateSystemPromptProps = {
  sysPreset: string;
  tools: Tool[];
  resources: Resource[];
  prompts: Prompt[];
  resourcesUsed: ResourceUseRecord[];
  promptsUsed: PromptUseRecord[];
};

const safePretty = (v: unknown) => {
  try {
    return JSON.stringify(v, null, 2);
  } catch {
    return String(v);
  }
};

const section = (title: string, bodyLines: string[]): string =>
  bodyLines.length ? `${title}\n${bodyLines.join("\n")}` : "";

const renderTools = (tools: Tool[]) =>
  section(
    `TOOLS (${tools.length}):`,
    tools.map((t) => `- ${t.name}: ${t.description ?? ""}`)
  );

const renderResources = (resources: Resource[]) =>
  section(
    `RESOURCES (${resources.length}):`,
    resources.map((r) => `- ${r.name} (${r.uri}): ${r.description || "No description"}`)
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

const renderLoadedResources = (used: ResourceUseRecord[]) =>
  section(
    "LOADED RESOURCES:",
    used.map((r) => `RESOURCE "${r.uri}":\n${safePretty(r.content)}`)
  );

const renderLoadedPrompts = (used: PromptUseRecord[]) =>
  section(
    "LOADED PROMPT TEMPLATES:",
    used.map(
      (p) => `PROMPT TEMPLATE "${p.name}" (args: ${safePretty(p.args)}):\n${safePretty(p.content)}`
    )
  );

export const createSystemPrompt = ({
  sysPreset,
  tools,
  resources,
  prompts,
  resourcesUsed,
  promptsUsed,
}: CreateSystemPromptProps): string => {
  const header = `${sysPreset}\n\nCURRENTLY AVAILABLE MCP CAPABILITIES:`;

  // Build sections only when they have content, then join with blank lines.
  const parts = [
    header,
    tools.length ? renderTools(tools) : "",
    resources.length ? renderResources(resources) : "",
    prompts.length ? renderPrompts(prompts) : "",
    resourcesUsed.length ? renderLoadedResources(resourcesUsed) : "",
    promptsUsed.length ? renderLoadedPrompts(promptsUsed) : "",
  ].filter(Boolean);

  return parts.join("\n\n");
};
