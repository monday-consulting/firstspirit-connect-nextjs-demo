import { useId } from "react";
import { useTranslations } from "next-intl";

export const SYSTEM_PROMPT_PRESETS = {
  proactive: "Default MCP-First: Always use MCP features proactively",
  ultra_aggressive: "Ultra Aggressive: Use EVERY MCP feature for EVERY response",
  aggressive: "Aggressive: Use ALL available MCP features for every response",
  balanced: "Balanced: Use MCP when clearly beneficial",
  assistant: "Assistant: General purpose with MCP when helpful",
} as const;

export type PresetKey = keyof typeof SYSTEM_PROMPT_PRESETS | "custom";

export type PromptPresetProps = {
  selectedPreset: PresetKey;
  setSelectedPreset: (value: PresetKey) => void;
  customSystemPrompt: string;
  setCustomSystemPrompt: (value: string) => void;
};

export const PromptPreset = ({
  selectedPreset,
  setSelectedPreset,
  customSystemPrompt,
  setCustomSystemPrompt,
}: PromptPresetProps) => {
  const t = useTranslations();
  const presetId = useId();
  const customPromptId = useId();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label htmlFor={presetId} className="font-semibold">
          {t("chat.preset")}
        </label>
        <select
          id={presetId}
          className="w-full rounded border border-gray px-2 py-1 text-xs hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={selectedPreset}
          onChange={(e) => setSelectedPreset(e.target.value as PresetKey)}
        >
          {Object.entries(SYSTEM_PROMPT_PRESETS).map(([key]) => (
            <option key={key} value={key}>
              {t(`chat.presets.${key}`)}
            </option>
          ))}
          <option value="custom">{t("chat.presets.custom")}</option>
        </select>
      </div>
      {selectedPreset === "custom" && (
        <div className="flex flex-col gap-1">
          <label htmlFor={customPromptId} className="font-semibold">
            {t("chat.customSystemPrompt")}
          </label>
          <input
            id={customPromptId}
            className="w-full rounded border border-gray-300 bg-white px-2 py-1 text-xs placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder={t("chat.customPromptPlaceholder")}
            value={customSystemPrompt}
            onChange={(e) => setCustomSystemPrompt(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};
