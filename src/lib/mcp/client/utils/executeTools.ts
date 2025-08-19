import type { ToolResultBlockParam, ToolUseBlock } from "@anthropic-ai/sdk/resources/messages.mjs";
import type { Core } from "../core/clientCore";

export type ExecuteToolsProps = {
  core: Core;
  block: ToolUseBlock;
};

export const executeTools = async ({ core, block }: ExecuteToolsProps) => {
  const used: ToolUseBlock = {
    id: block.id,
    name: block.name,
    input: block.input,
    type: "tool_use",
  };

  try {
    const args =
      block.input && typeof block.input === "object" && !Array.isArray(block.input)
        ? (block.input as Record<string, unknown>)
        : {};

    const raw = await core.executeTool({ name: block.name, arguments: args });

    const result: ToolResultBlockParam = {
      tool_use_id: block.id,
      type: "tool_result",
      content: JSON.stringify(raw),
    };

    return { used, result };
  } catch (err) {
    const result: ToolResultBlockParam = {
      tool_use_id: block.id,
      type: "tool_result",
      is_error: true,
      content: err instanceof Error ? err.message : String(err),
    };

    return { used, result };
  }
};
