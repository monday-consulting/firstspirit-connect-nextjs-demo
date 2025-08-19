import type { Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import { ConnectionSummary } from "./ConnectionSummary";
import { type PresetKey, PromptPreset } from "./PromptPreset";
import { PromptsList } from "./PromptsList";
import { ResourcesList } from "./ResourcesList";

export type DetailsPanelProps = {
  connectedServers: string[];
  availableTools: Tool[];
  availableResources: Resource[];
  availablePrompts: Prompt[];
  selectedResources: string[];
  setSelectedResources: React.Dispatch<React.SetStateAction<string[]>>;
  selectedPrompts: { name: string }[];
  setSelectedPrompts: React.Dispatch<React.SetStateAction<{ name: string }[]>>;
  selectedPreset: PresetKey;
  setSelectedPreset: React.Dispatch<React.SetStateAction<PresetKey>>;
  customSystemPrompt: string;
  setCustomSystemPrompt: React.Dispatch<React.SetStateAction<string>>;
};

export const DetailsPanel = ({
  connectedServers,
  availableTools,
  availableResources,
  availablePrompts,
  selectedPrompts,
  selectedResources,
  setSelectedPrompts,
  setSelectedResources,
  selectedPreset,
  setSelectedPreset,
  customSystemPrompt,
  setCustomSystemPrompt,
}: DetailsPanelProps) => {
  return (
    <div className="max-h-64 overflow-auto border-b bg-gray-50 px-3 py-2 text-gray-700 text-xs">
      <div className="mb-2 font-semibold">Technical details</div>

      <PromptPreset
        selectedPreset={selectedPreset}
        setSelectedPreset={setSelectedPreset}
        customSystemPrompt={customSystemPrompt}
        setCustomSystemPrompt={setCustomSystemPrompt}
      />

      {/* Connection summary */}
      <ConnectionSummary
        connectedServers={connectedServers}
        availableTools={availableTools}
        availableResources={availableResources}
        availablePrompts={availablePrompts}
      />

      {/* Quick toggles: Resources */}
      <ResourcesList
        availableResources={availableResources}
        selectedResources={selectedResources}
        setSelectedResources={setSelectedResources}
      />

      {/* Quick toggles: Prompts */}
      <PromptsList
        availablePrompts={availablePrompts}
        selectedPrompts={selectedPrompts}
        setSelectedPrompts={setSelectedPrompts}
      />
    </div>
  );
};
