import type { ToolResultBlockParam, ToolUseBlock } from "@anthropic-ai/sdk/resources/messages.mjs";
import type { Core } from "../core/clientCore";

export type ExecuteToolsProps = {
  core: Core;
  block: ToolUseBlock;
};

/**
 * Executes an MCP tool and returns formatted results for Claude API
 * @param props - Execution properties containing core instance and tool block
 * @returns Promise resolving to tool usage record and result for API consumption
 */
export const executeTools = async ({ core, block }: ExecuteToolsProps) => {
  if (!core) {
    throw new Error("[MCP Client] MCP core instance is required for tool execution");
  }

  if (!block || !block.name || !block.id) {
    throw new Error("[MCP Client] Valid tool block with name and ID is required");
  }

  const used: ToolUseBlock = {
    id: block.id,
    name: block.name,
    input: block.input,
    type: "tool_use",
  };

  try {
    // Safely extract and validate tool arguments
    const args =
      block.input && typeof block.input === "object" && !Array.isArray(block.input)
        ? (block.input as Record<string, unknown>)
        : {};

    console.log(`[MCP Client] Executing tool: ${block.name} with args:`, Object.keys(args));
    const raw = await core.executeTool({ name: block.name, arguments: args });

    let content: string;
    try {
      content = JSON.stringify(raw);
    } catch (serializeError) {
      console.warn(
        `[MCP Client] Failed to serialize tool result for ${block.name}:`,
        serializeError
      );
      content = String(raw);
    }

    const result: ToolResultBlockParam = {
      tool_use_id: block.id,
      type: "tool_result",
      content,
    };

    return { used, result };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`[MCP Client] Tool execution failed for ${block.name}:`, errorMessage);

    const result: ToolResultBlockParam = {
      tool_use_id: block.id,
      type: "tool_result",
      is_error: true,
      content: errorMessage,
    };

    return { used, result };
  }
};
