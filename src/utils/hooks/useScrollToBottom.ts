import { type RefObject, useEffect } from "react";
import type { Message } from "@/components/features/McpChat/ChatConversation";

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
