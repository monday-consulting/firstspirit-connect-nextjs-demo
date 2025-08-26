import type { ResourceUseRecord } from "@/lib/mcp/client/utils/selectResourcesToLoad";
import type { ToolUseBlock } from "@anthropic-ai/sdk/resources/messages.mjs";
import type { Prompt } from "@modelcontextprotocol/sdk/types.js";
import { ChatResponse } from "./ChatResponse";
import { LoadingMessage } from "./LoadingMessage";
import { StartingMessage } from "./StartingMessage";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  toolsUsed?: ToolUseBlock[];
  resourcesUsed?: ResourceUseRecord[];
  promptsUsed?: Prompt[];
  timestamp: Date;
};

export type ChatConversationProps = {
  messages: Message[];
  loading: boolean;
  messagesEndRef?: React.RefObject<HTMLDivElement | null>;
};

export type ChatWithToolsOptions = {
  useResources?: string[];
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  usePrompts?: Array<{ name: string; args?: any }>;
  customSystemPrompt?: string;
  autoLoadAllResources?: boolean;
  autoApplyRelevantPrompts?: boolean;
};

export const ChatConversation = ({ messages, loading, messagesEndRef }: ChatConversationProps) => {
  return (
    <div className="flex-1 space-y-3 overflow-y-auto p-3">
      <StartingMessage messages={messages} />
      <ChatResponse messages={messages} />
      <LoadingMessage loading={loading} />

      <div ref={messagesEndRef} />
    </div>
  );
};
