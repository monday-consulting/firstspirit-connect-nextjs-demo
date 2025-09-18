import type { Prompt } from "@modelcontextprotocol/sdk/types.js";
import type { ModelId } from "@/components/features/McpChat/AvailableModels";

export type McpChatStreamRequest = {
  messages: Array<{ role: "user" | "assistant" | "system"; content: string }>;
  useResources?: string[];
  usedUserPrompt?: Prompt;
  customSystemPrompt?: string;
  autoLoadAllResources?: boolean;
  autoApplyRelevantPrompts?: boolean;
  selectedModel?: ModelId;
};

export type StreamEvent = {
  event: string;
  data: unknown;
};

export const postMcpChatStream = async (
  body: McpChatStreamRequest,
  onEvent: (event: StreamEvent) => void,
  signal?: AbortSignal
) => {
  const res = await fetch("/api/mcp/chat/stream", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal,
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  if (!res.body) throw new Error("No response body");

  const reader = res.body.getReader();
  const decoder = new TextDecoder();

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split("\n");
      let currentEvent = "message";

      for (const line of lines) {
        if (line.startsWith("event: ")) {
          currentEvent = line.slice(7);
          continue;
        }

        if (line.startsWith("data: ")) {
          const data = line.slice(6);
          if (data.trim()) {
            try {
              const parsedData = JSON.parse(data);
              onEvent({ event: currentEvent, data: parsedData });
            } catch {
              console.warn("Failed to parse SSE data:", data);
            }
          }
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
};
