import type { Prompt } from "@modelcontextprotocol/sdk/types.js";
import type { ModelId } from "@/components/features/McpChat/AvailableModels";

export type McpChatRequest = {
  messages: Array<{ role: "user" | "assistant" | "system"; content: string }>;
  useResources?: string[];
  usedUserPrompt?: Prompt;
  customSystemPrompt?: string;
  autoLoadAllResources?: boolean;
  autoApplyRelevantPrompts?: boolean;
  selectedModel?: ModelId;
};

type StreamEvent = {
  event: string;
  data: unknown;
};

/**
 * Sends a non-streaming chat request to the MCP API
 * @param body - The chat request payload
 * @param signal - Optional AbortSignal for request cancellation
 * @returns Promise resolving to the chat response
 * @throws Error if the request fails or returns non-ok status
 */
export const postMcpChat = async (body: McpChatRequest, signal?: AbortSignal) => {
  try {
    const res = await fetch("/api/mcp/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal,
    });

    if (!res.ok) {
      const errorText = await res.text().catch(() => "Unknown error");
      throw new Error(
        `MCP chat request failed: HTTP ${res.status} ${res.statusText} - ${errorText}`
      );
    }

    return res.json();
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("[MCP Client] MCP chat request was cancelled");
    }
    throw error;
  }
};

/**
 * Sends a streaming chat request to the MCP API and processes server-sent events
 * @param body - The chat request payload
 * @param onEvent - Callback function to handle streaming events
 * @param signal - Optional AbortSignal for request cancellation
 * @throws Error if the request fails, returns non-ok status, or has no response body
 */
export const postMcpChatStream = async (
  body: McpChatRequest,
  onEvent: (event: StreamEvent) => void,
  signal?: AbortSignal
) => {
  let reader: ReadableStreamDefaultReader<Uint8Array> | null = null;

  try {
    const res = await fetch("/api/mcp/chat/stream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal,
    });

    if (!res.ok) {
      const errorText = await res.text().catch(() => "Unknown error");
      throw new Error(
        `MCP streaming chat request failed: HTTP ${res.status} ${res.statusText} - ${errorText}`
      );
    }

    if (!res.body) {
      throw new Error("[MCP Client] MCP streaming response has no body");
    }

    reader = res.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split("\n");
      let currentEvent = "message";

      for (const line of lines) {
        if (line.startsWith("event: ")) {
          currentEvent = line.slice(7).trim();
          continue;
        }

        if (line.startsWith("data: ")) {
          const data = line.slice(6);
          if (data.trim()) {
            try {
              const parsedData = JSON.parse(data);
              onEvent({ event: currentEvent, data: parsedData });
            } catch (parseError) {
              console.warn("[MCP Client] Failed to parse SSE data:", {
                data,
                error: parseError instanceof Error ? parseError.message : String(parseError),
              });
            }
          }
        }
      }
    }
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("[MCP Client] MCP streaming chat request was cancelled");
    }
    throw error;
  } finally {
    if (reader) {
      try {
        reader.releaseLock();
      } catch (releaseError) {
        console.warn("[MCP Client] Failed to release stream reader:", releaseError);
      }
    }
  }
};
