export const MODEL_IDS = {
  CLAUDE: "claude-sonnet-4-20250514",
  GPT_OSS_20B: "gpt-oss:20b",
  GPT_OSS_120B: "gpt-oss:120b",
  GEMINI: "gemini-2.5-pro",
} as const;

export type ModelId = (typeof MODEL_IDS)[keyof typeof MODEL_IDS];

export const MODEL_OPTIONS = Object.entries(MODEL_IDS).map(([key, value]) => ({
  key,
  value,
}));

export interface AvailableModelsProps {
  selectedModel: ModelId;
  setSelectedModel: (model: ModelId) => void;
  id?: string;
  label?: string;
}

export const AvailableModels = ({
  selectedModel,
  setSelectedModel,
  id = "model-select",
  label = "Model",
}: AvailableModelsProps) => (
  <div className="inline-flex items-center gap-2 px-2 py-1">
    <label htmlFor={id} className="text-gray-700 text-sm">
      {label}
    </label>
    <select
      id={id}
      value={selectedModel}
      onChange={(e) => setSelectedModel(e.target.value as ModelId)}
      className="w-full truncate rounded-md border border-gray-300 px-2 text-sm"
    >
      {MODEL_OPTIONS.map(({ key, value }) => (
        <option key={value} value={value}>
          {key}
        </option>
      ))}
    </select>
  </div>
);
