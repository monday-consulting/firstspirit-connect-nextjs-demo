export type ModelId =
  | "mistral:latest"
  | "gpt-oss:20b"
  | "gpt-oss:120b"
  | "qwen3:32b"
  | "llama3.3:latest"
  | "claude-sonnet-4-20250514";

export const MODEL_OPTIONS: { value: ModelId; label: string }[] = [
  { value: "claude-sonnet-4-20250514", label: "claude-sonnet-4-20250514" },
  { value: "mistral:latest", label: "mistral:latest" },
  { value: "gpt-oss:20b", label: "gpt-oss:20b" },
  { value: "gpt-oss:120b", label: "gpt-oss:120b" },
  { value: "qwen3:32b", label: "qwen3:32b" },
  { value: "llama3.3:latest", label: "llama3.3:latest" },
];

export type AvailableModelsProps = {
  selectedModel: ModelId;
  setSelectedModel: (model: ModelId) => void;
  id?: string;
  label?: string;
};

export const AvailableModels = ({
  selectedModel,
  setSelectedModel,
  id = "model-select",
  label = "Model",
}: AvailableModelsProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-2 py-1">
      <label htmlFor={id} className="text-gray-700 text-sm">
        {label}
      </label>
      <select
        id={id}
        value={selectedModel}
        onChange={(event) => setSelectedModel(event.target.value as ModelId)}
        className={"w-full truncate rounded-md border border-gray-300 px-2 text-sm"}
      >
        {MODEL_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
