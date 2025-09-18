"use client";

import type { Prompt } from "@modelcontextprotocol/sdk/types.js";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useChatStreamEngine } from "@/utils/hooks/useChatStreamEngine";
import { useMcpInit } from "@/utils/hooks/useMcpInit";
import { useSystemPrompt } from "@/utils/hooks/useSystemPrompt";
import { AvailableModels, type ModelId } from "./AvailableModels";
import { ChatConversation } from "./ChatConversation";
import { ChatHeader } from "./ChatHeader";
import { DetailsPanel } from "./DetailsPanel";
import { FloatingButton } from "./FloatingButton";
import { InputMessage } from "./InputMessage";
import type { PresetKey } from "./PromptPreset";
import { Sizebar, type SizeKey, sizeClasses } from "./Sizebar";

export type FloatingMCPChatProps = {
  enabled?: boolean;
  detailsHotkey?: string;
  defaultPreset?: Exclude<PresetKey, "custom">;
  defaultCustomPrompt?: string;
  onOpenChange?: (open: boolean) => void;
};

const FloatingMCPChat = ({
  enabled = process.env.NEXT_PUBLIC_MCP_ENABLED === "true",
  defaultPreset = "default",
  defaultCustomPrompt = "",
  onOpenChange,
}: FloatingMCPChatProps) => {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [size, setSize] = useState<SizeKey>("sm");
  const [input, setInput] = useState("");
  const [selectedPrompts, setSelectedPrompts] = useState<{ name: string }[]>([]);
  const [selectedResources, setSelectedResources] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<ModelId>("gpt-oss:20b");
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    onOpenChange?.(open);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (pathname == null) return;
    setOpen(false);
    setShowDetails(false);
    setInput("");
  }, [pathname]);

  const { availableTools, availableResources, availablePrompts, connectedServers } =
    useMcpInit(enabled);

  const { selectedPreset, customSystemPrompt, setCustomSystemPrompt, setSelectedPreset } =
    useSystemPrompt(defaultPreset, defaultCustomPrompt);

  // Always use streaming for better performance and to avoid timeout issues
  const { messages, loading, send } = useChatStreamEngine();

  const messagesEndRef = useRef<HTMLDivElement>(null);

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
            : selectedPreset !== "default"
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
      {open && (
        <div
          className={`fixed right-6 bottom-24 z-40 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5 ${width}`}
        >
          <ChatHeader
            toggleDetails={() => setShowDetails((value) => !value)}
            toggleOpen={() => setOpen((value) => !value)}
          />
          {showDetails && (
            <div className="flex w-full justify-between">
              <AvailableModels selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
              <Sizebar setSize={setSize} size={size} />
            </div>
          )}

          <div className={`flex flex-col ${height}`}>
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
