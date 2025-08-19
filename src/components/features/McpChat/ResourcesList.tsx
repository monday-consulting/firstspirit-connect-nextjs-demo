export type ResourcesListProps = {
  availableResources: { uri: string; name: string }[];
  selectedResources: string[];
  setSelectedResources: React.Dispatch<React.SetStateAction<string[]>>;
};

export const ResourcesList = ({
  availableResources,
  selectedResources,
  setSelectedResources,
}: ResourcesListProps) => {
  if (availableResources.length === 0) return null;

  return (
    <div className="mt-3">
      <div className="mb-1 font-semibold text-[11px]">Resources</div>
      <div className="max-h-28 space-y-1 overflow-auto rounded border p-2">
        {availableResources.map((resource) => (
          <label key={resource.uri} className="flex items-center gap-2 text-[11px]">
            <input
              type="checkbox"
              checked={selectedResources.includes(resource.uri)}
              onChange={(e) =>
                setSelectedResources((prev) =>
                  e.target.checked
                    ? [...prev, resource.uri]
                    : prev.filter((u) => u !== resource.uri)
                )
              }
            />
            <span className="font-mono">{resource.name}</span>
            <span className="text-gray-500"> ({resource.uri})</span>
          </label>
        ))}
      </div>
    </div>
  );
};
