import { useMemo, useState } from "react";
import { type PresetKey, SYSTEM_PROMPT_PRESETS } from "@/components/features/McpChat/PromptPreset";

export const useSystemPrompt = (defaultPreset: PresetKey, defaultCustom: string) => {
  const [selectedPreset, setSelectedPreset] = useState<PresetKey>(defaultPreset);
  const [customSystemPrompt, setCustomSystemPrompt] = useState(defaultCustom);

  const computed = useMemo(() => {
    if (selectedPreset === "custom") return customSystemPrompt.trim();
    if (selectedPreset in SYSTEM_PROMPT_PRESETS)
      return SYSTEM_PROMPT_PRESETS[selectedPreset as keyof typeof SYSTEM_PROMPT_PRESETS];
    return SYSTEM_PROMPT_PRESETS.default;
  }, [selectedPreset, customSystemPrompt]);

  return {
    selectedPreset,
    setSelectedPreset,
    customSystemPrompt,
    setCustomSystemPrompt,
    systemPrompt: computed,
  };
};
