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
    <div className="mt-3 grid grid-cols-4 gap-2">
      <div>
        <div className="text-[11px] text-gray-500">Connected</div>
        <div className="font-mono">{connectedServers.length > 0 ? "✅" : "🚫"}</div>
      </div>
      <div>
        <div className="text-[11px] text-gray-500">Tools</div>
        <div className="font-mono">{availableTools.length}</div>
      </div>
      <div>
        <div className="text-[11px] text-gray-500">Resources</div>
        <div className="font-mono">{availableResources.length}</div>
      </div>
      <div>
        <div className="text-[11px] text-gray-500">Prompts</div>
        <div className="font-mono">{availablePrompts.length}</div>
      </div>
    </div>
  );
};
