import type { Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import { AvailableModels, type ModelId } from "./AvailableModels";
import { ConnectionSummary } from "./ConnectionSummary";
import { type PresetKey, PromptPreset } from "./PromptPreset";
import { PromptsList } from "./PromptsList";
import { ResourcesList } from "./ResourcesList";
import { Sizebar, type SizeKey } from "./Sizebar";

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
  selectedModel: ModelId;
  setSelectedModel: React.Dispatch<React.SetStateAction<ModelId>>;
  size: SizeKey;
  setSize: React.Dispatch<React.SetStateAction<SizeKey>>;
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
  selectedModel,
  setSelectedModel,
  size,
  setSize,
}: DetailsPanelProps) => {
  return (
    <div className="max-h-64 overflow-auto border-b border-b-gray p-3 text-gray-700 text-xs">
      <div className="mb-2 flex w-full flex-col gap-2 sm:justify-between">
        <div className="flex flex-row justify-between gap-2">
          <AvailableModels selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
          <Sizebar setSize={setSize} size={size} />
        </div>
      </div>

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
