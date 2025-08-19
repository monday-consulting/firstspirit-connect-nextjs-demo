import type { Prompt } from "@modelcontextprotocol/sdk/types.js";

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
  if (availablePrompts.length === 0) return null;

  return (
    <div className="mt-3">
      <div className="mb-1 font-semibold text-[11px]">Prompts</div>
      <div className="max-h-28 space-y-1 overflow-auto rounded border p-2">
        {availablePrompts.map((p) => {
          const checked = selectedPrompts.some((x) => x.name === p.name);
          return (
            <label key={p.name} className="flex items-center gap-2 text-[11px]">
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
              />
              <span className="font-mono">{p.name}</span>
              {p.description && <span className="text-gray-500"> – {p.description}</span>}
            </label>
          );
        })}
      </div>
    </div>
  );
};
