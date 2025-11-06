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
  locale: string;
};

type StreamEvent = {
  event: string;
  data: unknown;
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
  const requestId = Math.random().toString(36).substr(2, 9);
  console.log(
    `[MCP Client] Starting streaming chat request [${requestId}] - Model: ${body.selectedModel}`
  );

  let reader: ReadableStreamDefaultReader<Uint8Array> | null = null;
  try {
    const startTime = performance.now();
    const res = await fetch("/api/mcp/chat/stream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal,
    });

    if (!res.ok) {
      const errorText = await res.text().catch(() => "Unknown error");
      console.error(
        `[MCP Client] Streaming chat request failed [${requestId}] - HTTP ${res.status} ${res.statusText}`
      );
      throw new Error(
        `MCP streaming chat request failed: HTTP ${res.status} ${res.statusText} - ${errorText}`
      );
    }

    if (!res.body) {
      throw new Error("[MCP Client] MCP streaming response has no body");
    }

    console.log(`[MCP Client] Streaming connection established [${requestId}]`);
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

    const duration = Math.round(performance.now() - startTime);
    console.log(`[MCP Client] Streaming chat completed [${requestId}] in ${duration}ms`);
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.log(`[MCP Client] Streaming chat cancelled [${requestId}]`);
      throw new Error("[MCP Client] MCP streaming chat request was cancelled");
    }
    console.error(`[MCP Client] Streaming chat error [${requestId}]:`, error);
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
