import { useCallback, useRef, useState } from "react";

import type { Message } from "@/components/features/McpChat/ChatConversation";
import { type McpChatStreamRequest, postMcpChatStream } from "@/lib/mcp/client/core/chatStream";

export const useChatStreamEngine = (initial: Message[] = []) => {
  const [messages, setMessages] = useState<Message[]>(initial);
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const send = useCallback(
    async (payload: Omit<McpChatStreamRequest, "messages"> & { userInput: string }) => {
      if (!payload.userInput.trim() || loading || streaming) return;

      const userMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: payload.userInput,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setLoading(true);
      setStreaming(true);

      abortRef.current?.abort();
      abortRef.current = new AbortController();

      // Create a placeholder assistant message that will be updated as we stream
      const assistantMessageId = (Date.now() + 1).toString();
      let currentContent = "";
      let toolsUsed: unknown[] = [];
      let resourcesUsed: unknown[] = [];
      let promptsUsed: unknown[] = [];

      const assistantMessage: Message = {
        id: assistantMessageId,
        role: "assistant",
        content: "",
        toolsUsed: [],
        resourcesUsed: [],
        promptsUsed: [],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      try {
        await postMcpChatStream(
          {
            messages: [...messages, userMessage].map((m) => ({
              role: m.role,
              content: m.content,
            })),
            useResources: payload.useResources,
            usedUserPrompt: payload.usedUserPrompt,
            customSystemPrompt: payload.customSystemPrompt,
            autoLoadAllResources: false,
            autoApplyRelevantPrompts: true,
            selectedModel: payload.selectedModel,
          },
          (event) => {
            if (event.event === "chunk" && typeof event.data === "object" && event.data) {
              const chunk = event.data as { type: string; content?: string };
              if (chunk.type === "text" && chunk.content) {
                currentContent += chunk.content;
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === assistantMessageId ? { ...msg, content: currentContent } : msg
                  )
                );
              }
            } else if (event.event === "complete" && typeof event.data === "object" && event.data) {
              const result = event.data as {
                response: string;
                toolsUsed: unknown[];
                resourcesUsed: unknown[];
                promptsUsed: unknown[];
              };

              toolsUsed = result.toolsUsed || [];
              resourcesUsed = result.resourcesUsed || [];
              promptsUsed = result.promptsUsed || [];

              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === assistantMessageId
                    ? {
                        ...msg,
                        content: result.response,
                        toolsUsed: toolsUsed as Message["toolsUsed"],
                        resourcesUsed: resourcesUsed as Message["resourcesUsed"],
                        promptsUsed: promptsUsed as Message["promptsUsed"],
                      }
                    : msg
                )
              );
            } else if (event.event === "error") {
              const errorData = event.data as { error: string };
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === assistantMessageId
                    ? { ...msg, content: `Error: ${errorData.error}` }
                    : msg
                )
              );
            }
          },
          abortRef.current.signal
        );
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMessageId ? { ...msg, content: `Error: ${error.message}` } : msg
            )
          );
        }
      } finally {
        setLoading(false);
        setStreaming(false);
      }
    },
    [messages, loading, streaming]
  );

  const abort = useCallback(() => {
    abortRef.current?.abort();
    setLoading(false);
    setStreaming(false);
  }, []);

  const clear = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    loading,
    streaming,
    send,
    abort,
    clear,
  };
};
