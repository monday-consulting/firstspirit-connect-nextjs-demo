"use client";

import type { Prompt } from "@modelcontextprotocol/sdk/types.js";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useAutoSelectResources } from "@/utils/hooks/useAutoSelectResources";
import { useChatEngine } from "@/utils/hooks/useChatEngine";
import { useChatIndicator } from "@/utils/hooks/useChatIndicator";
import { useInitialPromptSelect } from "@/utils/hooks/useInitialPromptSelect";
import { useMcpInit } from "@/utils/hooks/useMcpInit";
import { useSystemPrompt } from "@/utils/hooks/useSystemPrompt";
import { MODEL_IDS, type ModelId } from "./AvailableModels";
import { ChatConversation } from "./ChatConversation";
import { ChatHeader } from "./ChatHeader";
import { ChatIndicator } from "./ChatIndicator";
import { DetailsPanel } from "./DetailsPanel";
import { FloatingButton } from "./FloatingButton";
import { InputMessage } from "./InputMessage";
import type { PresetKey } from "./PromptPreset";
import { type SizeKey, sizeClasses } from "./Sizebar";

export type FloatingMCPChatProps = {
  enabled?: boolean;
  detailsHotkey?: string;
  defaultPreset?: Exclude<PresetKey, "custom">;
  defaultCustomPrompt?: string;
  onOpenChange?: (open: boolean) => void;
};

const FloatingMCPChat = ({
  enabled = process.env.NEXT_PUBLIC_MCP_ENABLED === "true",
  defaultPreset = "balanced",
  defaultCustomPrompt = "",
  onOpenChange,
}: FloatingMCPChatProps) => {
  const pathname = usePathname() ?? "/";
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [size, setSize] = useState<SizeKey>("sm");
  const [input, setInput] = useState("");
  const [selectedPrompts, setSelectedPrompts] = useState<{ name: string }[]>([]);
  const [selectedResources, setSelectedResources] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<ModelId>(MODEL_IDS.GPT_OSS_20B);

  const { availableTools, availableResources, availablePrompts, connectedServers } =
    useMcpInit(enabled);
  const { selectedPreset, customSystemPrompt, setCustomSystemPrompt, setSelectedPreset } =
    useSystemPrompt(defaultPreset, defaultCustomPrompt);
  const { messages, loading, send } = useChatEngine();
  const { showIndicatorPopup, closeIndicatorPopup, resetIndicatorPopupShown } = useChatIndicator({
    enabled,
    inactivityDelay: 5000,
    isOpen: open,
  });

  useAutoSelectResources(availableResources, pathname, setSelectedResources);

  useInitialPromptSelect(availablePrompts, setSelectedPrompts);

  useEffect(() => {
    onOpenChange?.(open);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (pathname == null) return;
    setOpen(false);
    setShowDetails(false);
    setInput("");
    closeIndicatorPopup();
    resetIndicatorPopupShown();
  }, [pathname, closeIndicatorPopup, resetIndicatorPopupShown]);

  // Close chat with ESC key when focus is inside
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
      }
    };

    if (open && chatContainerRef.current) {
      chatContainerRef.current.addEventListener("keydown", handleKeyDown);
      return () => {
        chatContainerRef.current?.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [open]);

  const handleSend = async (overrideText?: string, usedUserPrompt?: Prompt) => {
    const text = (overrideText ?? input).trim();
    if (!text || loading) return;

    setInput("");

    try {
      await send({
        userInput: text,
        useResources: selectedResources.length ? selectedResources : undefined,
        customSystemPrompt:
          selectedPreset === "custom"
            ? customSystemPrompt.trim() || undefined
            : selectedPreset !== "balanced"
              ? selectedPreset
              : undefined,
        usedUserPrompt,
        selectedModel,
      });
    } catch {
      setInput(text);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  if (!enabled) return null;

  const { width, height } = sizeClasses[size];

  return (
    <>
      <FloatingButton open={open} toggleOpen={() => setOpen((value) => !value)} />
      {showIndicatorPopup && !open && (
        <ChatIndicator onClose={closeIndicatorPopup} onOpenChat={() => setOpen(true)} />
      )}
      {open && (
        <div
          ref={chatContainerRef}
          tabIndex={-1}
          className={`fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-white shadow-2xl sm:inset-x-4 sm:bottom-4 sm:rounded-xl md:inset-x-auto md:right-6 md:bottom-24 md:left-auto md:w-[500px] ${width}`}
        >
          <ChatHeader
            toggleDetails={() => setShowDetails((value) => !value)}
            toggleOpen={() => setOpen((value) => !value)}
          />

          <div
            className={`flex h-[calc(100vh-120px)] flex-col sm:h-[calc(100vh-200px)] md:h-[600px] ${height}`}
          >
            {showDetails && (
              <DetailsPanel
                availablePrompts={availablePrompts}
                availableResources={availableResources}
                availableTools={availableTools}
                connectedServers={connectedServers}
                selectedPrompts={selectedPrompts}
                setSelectedPrompts={setSelectedPrompts}
                selectedResources={selectedResources}
                setSelectedResources={setSelectedResources}
                selectedPreset={selectedPreset}
                setSelectedPreset={setSelectedPreset}
                customSystemPrompt={customSystemPrompt}
                setCustomSystemPrompt={setCustomSystemPrompt}
                selectedModel={selectedModel}
                setSelectedModel={setSelectedModel}
                size={size}
                setSize={setSize}
              />
            )}

            <ChatConversation
              messages={messages}
              loading={loading}
              messagesEndRef={messagesEndRef}
            />

            <InputMessage
              input={input}
              loading={loading}
              sendMessage={handleSend}
              setInput={setInput}
              onKeyDown={onKeyDown}
              prompts={availablePrompts.filter((prompt) =>
                selectedPrompts.some((selectedPrompt) => selectedPrompt.name === prompt.name)
              )}
            />
          </div>
        </div>
      )}
    </>
  );
};

export { FloatingMCPChat };
