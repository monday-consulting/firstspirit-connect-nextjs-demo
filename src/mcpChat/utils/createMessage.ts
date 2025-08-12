import type {
  Message,
  MessageParam,
  ToolResultBlockParam,
  ToolUseBlock,
} from "@anthropic-ai/sdk/resources/messages.mjs";
import type { Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import type { createCore } from "../lib/clientCore";
import type { ChatWithToolsOptions } from "../lib/types";
import { createSystemPrompt } from "./createSystemPrompt";
import { selectPromptsToLoad } from "./prompts";
import { selectResourcesToLoad } from "./resources";
import { executeTools } from "./tools";

export type CreateMessageProps = {
  core: ReturnType<typeof createCore>;
  sysPreset: string;
  chatMessages: MessageParam[];
  messages: MessageParam[];
  tools: Tool[];
  resources: Resource[];
  prompts: Prompt[];
  options?: ChatWithToolsOptions;
};

export const createMessage = async ({
  core,
  sysPreset,
  chatMessages,
  messages,
  tools,
  resources,
  prompts,
  options,
}: CreateMessageProps) => {
  const toolsUsed: ToolUseBlock[] = [];
  const [resourcesUsed, promptsUsed] = await Promise.all([
    selectResourcesToLoad({ options, resources, core }),
    selectPromptsToLoad({ messages, prompts, core, options }),
  ]);

  const system = createSystemPrompt({
    sysPreset,
    tools,
    resources,
    prompts,
    resourcesUsed,
    promptsUsed,
  });

  // Prepare chat messages and map MCP tools → Anthropic tool schema
  const anthropicTools = tools.map((t) => ({
    name: t.name,
    description: t.description,
    input_schema: t.inputSchema,
  }));

  // First model call (may emit text + tool_use blocks)
  let first: Message;
  try {
    first = await core.anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 2000,
      system,
      messages: chatMessages,
      tools: anthropicTools,
    });
  } catch (error) {
    console.error("[chatWithTools] first model call failed:", error);
    return {
      response: "The model could not generate a response right now.",
      toolsUsed: [],
      resourcesUsed: [],
      promptsUsed: [],
    };
  }

  let finalResponse = "";
  const toolResults: ToolResultBlockParam[] = [];

  // Walk through the content: accumulate text; execute each tool_use and collect tool results
  const content = Array.isArray(first.content) ? first.content : [];
  for (const c of content) {
    if (c.type === "text") finalResponse += c.text;
    else if (c.type === "tool_use") {
      try {
        const { used, result } = await executeTools({ core, block: c });
        toolsUsed.push(used);
        toolResults.push(result);
      } catch (error) {
        console.warn("[chatWithTools] tool execution failed:", error);
        toolResults.push({
          tool_use_id: c.id,
          type: "tool_result",
          content: error instanceof Error ? `Tool failed: ${error.message}` : "Tool failed",
        });
      }
    }
  }

  // If tools were used, make a follow-up call with the tool_result blocks
  if (toolResults.length > 0) {
    const followUp: MessageParam[] = [
      ...chatMessages,
      { role: "assistant", content: first.content },
      { role: "user", content: toolResults },
    ];
    try {
      const second = await core.anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 2000,
        messages: followUp,
        tools: anthropicTools,
      });
      for (const c of second.content ?? []) if (c.type === "text") finalResponse += c.text ?? "";
    } catch (error) {
      console.warn("[chatWithTools] follow-up model call failed:", error);
      finalResponse ||= "I had trouble processing tool results.";
    }
  }

  return { response: finalResponse, toolsUsed, resourcesUsed, promptsUsed };
};
