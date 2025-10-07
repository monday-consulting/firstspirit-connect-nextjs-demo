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

/**
 * Selects and loads MCP resources based on options and auto-loading preferences
 * @param props - Configuration object with resources, core instance, and options
 * @returns Promise resolving to array of successfully loaded resource records
 */
export const selectResourcesToLoad = async ({
  resources,
  core,
  options,
}: SelectResourcesToLoadProps): Promise<ResourceUseRecord[]> => {
  if (!core) {
    throw new Error("MCP core instance is required for resource loading");
  }

  const shouldAutoLoadResources = options?.autoLoadAllResources !== false;
  let resourcesToLoad = options?.useResources ?? [];

  // Auto-load all available resources if enabled
  if (shouldAutoLoadResources && Array.isArray(resources) && resources.length > 0) {
    const availableUris = resources
      .filter((resource) => resource.uri && typeof resource.uri === "string")
      .map((resource) => resource.uri);

    resourcesToLoad = [...new Set([...resourcesToLoad, ...availableUris])];
  }

  if (resourcesToLoad.length === 0) {
    console.log("[MCP Client] No resources to load");
    return [];
  }

  console.log(`[MCP Client] Loading ${resourcesToLoad.length} resources...`);

  const RESOURCE_TIMEOUT = 10000; // 10 seconds
  const results = await Promise.all(
    resourcesToLoad.map(async (uri) => {
      if (!uri || typeof uri !== "string") {
        console.warn("[MCP Client] Skipping invalid resource URI:", uri);
        return null;
      }

      return Promise.race([
        core
          .executeResource(uri)
          .then((content) => {
            console.log(`[MCP Client] Successfully loaded resource: ${uri}`);
            return { uri, content };
          })
          .catch((error) => {
            const errorMessage = error instanceof Error ? error.message : String(error);
            console.warn(`[MCP Client] Failed to load resource ${uri}:`, errorMessage);
            return null;
          }),
        // Timeout for resource loading
        new Promise<null>((resolve) => {
          setTimeout(() => {
            console.warn(
              `[MCP Client] Resource loading timed out after ${RESOURCE_TIMEOUT}ms: ${uri}`
            );
            resolve(null);
          }, RESOURCE_TIMEOUT);
        }),
      ]);
    })
  );

  // Filter out failed/timed out resources and ensure type safety
  const successfulResults = results.filter((r): r is NonNullable<typeof r> => r !== null);
  console.log(
    `[MCP Client] Successfully loaded ${successfulResults.length}/${resourcesToLoad.length} resources`
  );

  return successfulResults;
};
