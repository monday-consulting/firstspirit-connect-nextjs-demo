import { useTranslations } from "next-intl";

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
}

export const AvailableModels = ({
  selectedModel,
  setSelectedModel,
  id = "model-select",
}: AvailableModelsProps) => {
  const t = useTranslations();

  return (
    <div className="flex items-center gap-2">
      <label htmlFor={id}>{t("chat.model")}:</label>
      <select
        id={id}
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value as ModelId)}
        className="rounded border border-gray px-2 py-1 text-xs focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        {MODEL_OPTIONS.map(({ key, value }) => (
          <option key={value} value={value}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};
