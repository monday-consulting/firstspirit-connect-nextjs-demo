import type { Tool as MCPTool } from "@modelcontextprotocol/sdk/types.js";
import { type JSONSchema7, jsonSchema, type StepResult, type ToolSet, tool } from "ai";

/**
 * Processes MCP tools and converts them into AI SDK compatible tool format
 * @param toolsFromMcp - Array of MCP tools to process
 * @param executeTool - Function to execute a tool by name with arguments
 * @returns Object mapping tool names to AI SDK tool definitions
 */
export const processTools = (
  toolsFromMcp: MCPTool[],
  // biome-ignore lint/suspicious/noExplicitAny: AI SDK requires any for tool execution return type
  executeTool: (name: string, args: unknown) => Promise<any>
) => {
  const entries = toolsFromMcp.map((t) => {
    return [
      t.name,
      tool({
        description: t.description,
        inputSchema: t.inputSchema
          ? jsonSchema(t.inputSchema as JSONSchema7)
          : jsonSchema({ type: "object", properties: {} }),

        execute: async (args) => {
          console.log(`[MCP Client] Calling tool: ${t.name} with args:`, args);
          return executeTool(t.name, args);
        },
      }),
    ] as const;
  });

  return Object.fromEntries(entries);
};

/**
 * Extracts and formats used tools from AI SDK step results
 * @param steps - Array of step results from AI SDK containing tool calls and results
 * @returns Array of formatted tool usage information including calls, results, and errors
 */
export const getUsedTools = (steps: StepResult<ToolSet>[]) => {
  return steps.flatMap((step) => {
    const blocks = step.content || [];
    return blocks
      .filter((block) => block.type === "tool-result")
      .map((result) => {
        const call = blocks.find(
          (call) => call.type === "tool-call" && call.toolCallId === result.toolCallId
        );

        return {
          step: step.finishReason ?? "step",
          toolCallId: result.toolCallId,
          name: result.toolName,
          arguments: call?.type === "tool-call" ? call?.input : {},
          output: result.output?.value ?? result.output?.content ?? result.output ?? null,
          isError: Boolean(result.output?.isError),
        };
      });
  });
};
