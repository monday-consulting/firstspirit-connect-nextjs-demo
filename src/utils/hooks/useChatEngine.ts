import { useCallback, useRef, useState } from "react";

import type { Message } from "@/components/features/McpChat/ChatConversation";
import { type McpChatRequest, postMcpChat } from "@/lib/mcp/client/core/chat";

export const useChatEngine = (initial: Message[] = []) => {
  const [messages, setMessages] = useState<Message[]>(initial);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const send = useCallback(
    async (payload: Omit<McpChatRequest, "messages"> & { userInput: string }) => {
      if (!payload.userInput.trim() || loading) return;
      const userMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: payload.userInput,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);
      setLoading(true);
      abortRef.current?.abort();
      abortRef.current = new AbortController();
      try {
        const data = await postMcpChat(
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
          abortRef.current.signal
        );

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.response,
          toolsUsed: data.toolsUsed,
          resourcesUsed: data.resourcesUsed,
          promptsUsed: data.promptsUsed,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
        return data;
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: "Sorry, I encountered an error. Please try again.",
            timestamp: new Date(),
          },
        ]);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [messages, loading]
  );

  const cancel = useCallback(() => {
    abortRef.current?.abort();
    setLoading(false);
  }, []);

  return { messages, setMessages, loading, send, cancel };
};
