import type { Message } from "@/components/features/McpChat/ChatConversation";
import { type RefObject, useEffect } from "react";

export const useScrollToBottom = (
  ref: RefObject<HTMLElement | null>,
  messages: Message[],
  open: boolean
) => {
  useEffect(() => {
    if (!open) return;
    if (messages.length === 0) return;

    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [ref, open, messages.length]);
};
