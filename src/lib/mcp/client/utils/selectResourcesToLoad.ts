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
}: SelectResourcesToLoadProps): Promise<ResourceUseRecord[]> => {
  const shouldAutoLoadResources = options?.autoLoadAllResources !== false;
  let resourcesToLoad = options?.useResources ?? [];
  if (shouldAutoLoadResources && resources.length > 0) {
    resourcesToLoad = [
      ...new Set([...resourcesToLoad, ...resources.map((resource) => resource.uri)]),
    ];
  }

  const results = await Promise.all(
    resourcesToLoad.map((uri) =>
      Promise.race([
        core
          .executeResource(uri)
          .then((content) => ({ uri, content }))
          .catch((error) => {
            console.warn(`[MCP-Client] Read resource failed: ${uri}`, error);
            return null;
          }),
        // 10-second timeout for resource loading
        new Promise<null>((resolve) => setTimeout(() => resolve(null), 10000)),
      ])
    )
  );

  // Filter out nulls, then cast to ResourceUseRecord[]
  return results.filter((r): r is NonNullable<typeof r> => r !== null) as ResourceUseRecord[];
};
