import type { Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";

export type ConnectionSummaryProps = {
  connectedServers: string[];
  availableTools: Tool[];
  availableResources: Resource[];
  availablePrompts: Prompt[];
};

export const ConnectionSummary = ({
  connectedServers,
  availableTools,
  availableResources,
  availablePrompts,
}: ConnectionSummaryProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold">Status</span>
      <div className="grid grid-cols-4 gap-2 rounded border border-gray p-2">
        <div className="flex flex-col items-center gap-1">
          <div>Connected</div>
          <div className="text-md">{connectedServers.length > 0 ? "✅" : "🚫"}</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div>Tools</div>
          <div className="font-semibold">{availableTools.length}</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div>Resources</div>
          <div className="font-semibold">{availableResources.length}</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div>Prompts</div>
          <div className="font-semibold">{availablePrompts.length}</div>
        </div>
      </div>
    </div>
  );
};
