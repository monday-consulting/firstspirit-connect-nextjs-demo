import type { Prompt } from "@modelcontextprotocol/sdk/types.js";
import { useTranslations } from "next-intl";
import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { VscSend } from "react-icons/vsc";
import { PromptModal } from "./PromptModal";
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
  const t = useTranslations();

  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
        setSelectedIndex(0);
        return;
      }
    }
    setMenuOpen(false);
    setFilter("");
    setSelectedIndex(0);
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
    // Handle prompt menu navigation
    if (menuOpen && filteredPrompts.length > 0) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredPrompts.length);
        return;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredPrompts.length) % filteredPrompts.length);
        return;
      }
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        pickPrompt(filteredPrompts[selectedIndex]);
        return;
      }
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }
    }

    onKeyDown?.(event);
    if (event.key === "Escape") {
      if (modalOpen) setModalOpen(false);
      else setMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 p-3" ref={wrapperRef}>
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
          placeholder={t("chat.placeholder")}
          disabled={loading}
          rows={2}
          className="flex-1 resize-none rounded-md border border-gray p-2 text-text"
        />
        <button
          type="button"
          onClick={() => sendMessage()}
          disabled={loading || !input.trim()}
          className="ml-2 rounded-md bg-secondary px-4 py-2 text-white hover:bg-opacity-90 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-secondary"
        >
          <VscSend />
        </button>

        {menuOpen && filteredPrompts.length > 0 && (
          <div className="absolute bottom-12 left-0 z-20 w-full overflow-hidden rounded-md border border-gray bg-white shadow-xl">
            <div>
              {filteredPrompts.map((p, index) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => pickPrompt(p)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`block w-full cursor-pointer px-3 py-2 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset ${
                    index === selectedIndex
                      ? "bg-primary/10 text-primary"
                      : "text-textDark hover:bg-lightGray"
                  }`}
                  aria-current={index === selectedIndex ? "true" : undefined}
                >
                  <div className={`font-medium ${index === selectedIndex ? "text-primary" : ""}`}>
                    {p.name}
                  </div>
                  <div
                    className={`text-sm ${index === selectedIndex ? "text-primary" : "text-textLight"}`}
                  >
                    {p.description}
                  </div>
                </button>
              ))}
            </div>
            <div className="border-gray border-t bg-lightGray px-3 py-1.5 text-textLight text-xs">
              {t("chat.promptMenu.hint")}
            </div>
          </div>
        )}
      </div>

      {modalOpen && selectedPrompt && (
        <PromptModal
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
