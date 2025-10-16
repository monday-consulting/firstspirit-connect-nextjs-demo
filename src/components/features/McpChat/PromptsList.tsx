import type { Prompt } from "@modelcontextprotocol/sdk/types.js";
import { useTranslations } from "next-intl";

export type PromptsListProps = {
  availablePrompts: Prompt[];
  selectedPrompts: { name: string }[];
  setSelectedPrompts: React.Dispatch<React.SetStateAction<{ name: string }[]>>;
};

export const PromptsList = ({
  availablePrompts,
  selectedPrompts,
  setSelectedPrompts,
}: PromptsListProps) => {
  const t = useTranslations();

  if (availablePrompts.length === 0) return null;

  return (
    <div className="flex flex-col gap-1">
      <div className="font-semibold">{t("chat.prompts")}</div>
      <div className="flex flex-col gap-1 rounded border border-gray p-2">
        {availablePrompts.map((p) => {
          const checked = selectedPrompts.some((x) => x.name === p.name);
          return (
            <label
              key={p.name}
              className="flex cursor-pointer items-center gap-2 rounded px-1 py-0.5 hover:bg-gray-50"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) =>
                  setSelectedPrompts((prev) =>
                    e.target.checked
                      ? [
                          ...prev,
                          {
                            name: p.name,
                          },
                        ]
                      : prev.filter((x) => x.name !== p.name)
                  )
                }
                className="cursor-pointer"
              />
              <span>{p.name}</span>
              {p.description && <span>- {p.description}</span>}
            </label>
          );
        })}
      </div>
    </div>
  );
};
