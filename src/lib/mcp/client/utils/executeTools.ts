import type { ToolResultBlockParam, ToolUseBlock } from "@anthropic-ai/sdk/resources/messages.mjs";

export type CoreReader = {
  executeTool: (name: string, args?: ToolUseBlock["input"]) => Promise<ToolResultBlockParam>;
};

export type ExecuteToolsProps = {
  core: CoreReader;
  block: ToolUseBlock;
};

export const executeTools = async ({
  core,
  block,
}: ExecuteToolsProps): Promise<{ used: ToolUseBlock; result: ToolResultBlockParam }> => {
  const used: ToolUseBlock = {
    id: block.id,
    name: block.name,
    input: block.input,
    type: "tool_use",
  };

  const result: ToolResultBlockParam = {
    tool_use_id: block.id,
    type: "tool_result",
    content: "",
  };

  try {
    const raw = await core.executeTool(block.name, block.input);
    result.content = JSON.stringify(raw?.content);
  } catch (err) {
    result.content = err instanceof Error ? err.message : String(err);
  }
  return { used, result };
};
