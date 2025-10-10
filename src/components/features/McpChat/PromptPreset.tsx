export const SYSTEM_PROMPT_PRESETS = {
  proactive: "Default MCP-First: Always use MCP features proactively ⚡",
  ultra_aggressive: "Ultra Aggressive: Use EVERY MCP feature for EVERY response 🚨",
  aggressive: "Aggressive: Use ALL available MCP features for every response 🔥",
  balanced: "Balanced: Use MCP when clearly beneficial ⚖️",
  assistant: "Assistant: General purpose with MCP when helpful 🤖",
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
  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <div className="mb-1 font-semibold text-[11px]">Preset</div>
        <select
          className="w-full rounded border px-2 py-[2px]"
          value={selectedPreset}
          onChange={(e) => setSelectedPreset(e.target.value as PresetKey)}
        >
          {Object.entries(SYSTEM_PROMPT_PRESETS).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
          <option value="custom">Custom</option>
        </select>
      </div>
      {selectedPreset === "custom" && (
        <div>
          <div className="mb-1 font-semibold text-[11px]">Custom System Prompt</div>
          <input
            className="w-full rounded border px-2 py-[6px]"
            placeholder="Custom system prompt…"
            value={customSystemPrompt}
            onChange={(e) => setCustomSystemPrompt(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};
