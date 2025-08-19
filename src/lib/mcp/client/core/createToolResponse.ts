import type {
  ContentBlock,
  Message,
  MessageCreateParamsBase,
  MessageParam,
  ToolResultBlockParam,
  ToolUseBlock,
} from "@anthropic-ai/sdk/resources/messages.js";
import { executeTools } from "../utils/executeTools";
import type { Core } from "./singleton";

export type CreateToolResponseProps = {
  response: Message;
  chatMessages: MessageParam[];
  system: string;
  possibleTools: MessageCreateParamsBase["tools"];
  core: Core;
};

export const CreateToolResponse = async ({
  response,
  chatMessages,
  system,
  possibleTools,
  core,
}: CreateToolResponseProps) => {
  let finalResponse = "";
  const toText = (blocks: ContentBlock[]) =>
    blocks
      .filter((block) => block.type === "text")
      .map((block) => block.text ?? "")
      .join("\n");

  // Add initial text from the response
  const firstBlocks = Array.isArray(response.content) ? response.content : [];
  const firstText = toText(firstBlocks);
  if (firstText) finalResponse += `${firstText}\n`;

  // Start conversation with user messages
  const conversation: MessageParam[] = [...chatMessages];
  const assistantBlocks = firstBlocks.filter(
    (block) => block.type === "text" || block.type === "tool_use"
  );
  conversation.push({ role: "assistant", content: assistantBlocks });

  const usedTools: ToolUseBlock[] = [];

  while (true) {
    const lastAssistantContent =
      (conversation.at(-1)?.role === "assistant" ? conversation.at(-1)?.content : firstBlocks) ??
      [];
    const last = Array.isArray(lastAssistantContent) ? lastAssistantContent : [];
    const toolUses: ToolUseBlock[] = last.filter((block) => block.type === "tool_use");
    if (toolUses.length === 0) break;

    const toolResults: ToolResultBlockParam[] = await Promise.all(
      toolUses.map(async (tool) => {
        const { used, result } = await executeTools({ core, block: tool });

        usedTools.push(used);

        return result;
      })
    );

    // tool_results pushed into conversation as user message
    conversation.push({ role: "user", content: toolResults });

    // Second request
    const turn = await core.anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      system,
      tools: possibleTools,
      messages: conversation,
      max_tokens: 2048,
      temperature: 0,
    });

    const blocks = Array.isArray(turn.content) ? turn.content : [];
    const textNow = toText(blocks);

    if (textNow) finalResponse += `${textNow}\n`;

    // Just text and tool_use blocks are relevant for the next turn
    const assistantBlocks = blocks.filter(
      (block) => block.type === "text" || block.type === "tool_use"
    );

    conversation.push({ role: "assistant", content: assistantBlocks });
    // If no more tools are used, the loop ends
    if (!blocks.some((block) => block.type === "tool_use")) break;
  }

  return { finalResponse, usedTools };
};
