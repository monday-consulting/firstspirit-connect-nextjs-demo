import type { Prompt } from "@modelcontextprotocol/sdk/types.js";
import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Modal } from "./PromptModal";
import { SuggestedQuestions } from "./SuggestedQuestions";

export type InputMessageProps = {
  input: string;
  setInput: (value: string) => void;
  sendMessage: (text?: string, usedUserPrompt?: Prompt) => void | Promise<void>;
  loading: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  prompts?: Prompt[];
};

export const InputMessage = ({
  input,
  setInput,
  sendMessage,
  loading,
  onKeyDown,
  prompts = [],
}: InputMessageProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    const index = input.lastIndexOf("/");
    if (index >= 0) {
      const after = input.slice(index + 1);
      const isTrigger = index === 0 || /\s/.test(input[index - 1]);
      if (isTrigger) {
        setFilter(after.trim());
        setMenuOpen(true);
        return;
      }
    }
    setMenuOpen(false);
    setFilter("");
  }, [input]);

  const filteredPrompts = useMemo(() => {
    const query = filter.toLowerCase();
    if (!query) return prompts;
    return prompts.filter(
      (prompt) =>
        prompt.name.toLowerCase().includes(query) ||
        prompt.description?.toLowerCase().includes(query)
    );
  }, [filter, prompts]);

  const pickPrompt = (prompt: Prompt) => {
    setSelectedPrompt(prompt);
    setMenuOpen(false);
    setModalOpen(true);
  };

  const handlePromptSubmit = async (values: Record<string, string>) => {
    if (!selectedPrompt) return;

    const argsObj = Object.fromEntries(
      Object.entries(values)
        .map(([key, value]) => [key, value.trim()])
        .filter(([, value]) => value.length > 0)
    );

    const payload = {
      name: selectedPrompt.name,
      arguments: argsObj,
    };

    setModalOpen(false);
    setSelectedPrompt(null);

    await sendMessage(`${selectedPrompt.description ?? selectedPrompt.name}`, payload);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    onKeyDown?.(event);
    if (event.key === "Escape") {
      if (modalOpen) setModalOpen(false);
      else setMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 border-t p-3" ref={wrapperRef}>
      <SuggestedQuestions
        onSend={(text) => {
          setInput(text);
          void sendMessage(text);
        }}
      />
      <div className="relative flex">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          disabled={loading}
          rows={2}
          className="flex-1 resize-none rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={() => sendMessage()}
          disabled={loading || !input.trim()}
          className="ml-2 rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send
        </button>

        {menuOpen && filteredPrompts.length > 0 && (
          <div className="absolute bottom-12 left-0 z-20 w-full overflow-hidden rounded-md border bg-white shadow-xl">
            <div className="max-h-72 overflow-auto">
              {filteredPrompts.map((p) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => pickPrompt(p)}
                  className="block w-full cursor-pointer px-3 py-2 text-left hover:bg-gray-50"
                >
                  <div className="font-medium">/{p.name}</div>
                  <div className="text-gray-500 text-sm">{p.description}</div>
                </button>
              ))}
            </div>
            <div className="border-t px-3 py-1 text-gray-500 text-xs">
              Enter/Click: Pick - ESC: Close
            </div>
          </div>
        )}
      </div>

      {modalOpen && selectedPrompt && (
        <Modal
          title={selectedPrompt.name}
          description={selectedPrompt.description}
          arguments={selectedPrompt.arguments}
          onClose={() => setModalOpen(false)}
          onSubmit={handlePromptSubmit}
        />
      )}
    </div>
  );
};
