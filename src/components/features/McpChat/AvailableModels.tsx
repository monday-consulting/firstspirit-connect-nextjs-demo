export const MODEL_IDS = [
  "claude-sonnet-4-20250514",
  "mistral:latest",
  "gpt-oss:20b",
  "gpt-oss:120b",
  "qwen3:32b",
  "llama3.3:latest",
] as const;

export type ModelId = (typeof MODEL_IDS)[number];

export const MODEL_OPTIONS = MODEL_IDS.map((id) => ({
  value: id,
  label: id,
}));

export interface AvailableModelsProps {
  selectedModel: ModelId;
  setSelectedModel: (model: ModelId) => void;
  id?: string;
  label?: string;
}

export const AvailableModels: React.FC<AvailableModelsProps> = ({
  selectedModel,
  setSelectedModel,
  id = "model-select",
  label = "Model",
}) => (
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
      {MODEL_OPTIONS.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
);
