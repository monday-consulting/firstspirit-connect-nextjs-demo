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
    <div className="flex flex-col gap-1">
      <div className="font-semibold text-gray-600">Resources</div>
      <div className="flex flex-col gap-1 rounded border border-gray p-2">
        {availableResources.map((resource) => (
          <label
            key={resource.uri}
            className="flex cursor-pointer items-center gap-2 rounded px-1 py-0.5 hover:bg-gray-50"
          >
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
              className="cursor-pointer"
            />
            <span className="font-mono text-gray-900">{resource.name}</span>
            <span className="text-gray-500">({resource.uri})</span>
          </label>
        ))}
      </div>
    </div>
  );
};
