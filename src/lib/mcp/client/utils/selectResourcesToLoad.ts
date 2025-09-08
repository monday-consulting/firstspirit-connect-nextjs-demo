import type { Resource, ResourceContents } from "@modelcontextprotocol/sdk/types.js";
import type { ChatWithToolsOptions } from "@/components/features/McpChat/ChatConversation";
import type { Core } from "../core/clientCore";

export type SelectResourcesToLoadProps = {
  resources: Resource[];
  core: Core;
  options?: ChatWithToolsOptions;
};

export type ResourceUseRecord = {
  uri: string;
  content: ResourceContents[];
};

export const selectResourcesToLoad = async ({
  resources,
  core,
  options,
}: SelectResourcesToLoadProps) => {
  const resourcesUsed: ResourceUseRecord[] = [];
  const shouldAutoLoadResources = options?.autoLoadAllResources !== false;
  let resourcesToLoad = options?.useResources ?? [];
  if (shouldAutoLoadResources && resources.length > 0) {
    resourcesToLoad = [
      ...new Set([...resourcesToLoad, ...resources.map((resource) => resource.uri)]),
    ];
  }

  for (const uri of resourcesToLoad) {
    try {
      const content = await core.executeResource(uri);
      resourcesUsed.push({ uri, content });
    } catch (error) {
      console.warn(`[MCP] Read resource failed: ${uri}`, error);
    }
  }

  return resourcesUsed;
};
