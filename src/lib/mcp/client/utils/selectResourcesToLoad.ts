import type { Resource, TextResourceContents } from "@modelcontextprotocol/sdk/types.js";
import type { ChatWithToolsOptions, ResourceUseRecord } from "../core/types";

export type CoreReader = {
  readResource: (uri: string) => Promise<TextResourceContents[]>;
};

export type SelectResourcesToLoadProps = {
  resources: Resource[];
  core: CoreReader;
  options?: ChatWithToolsOptions;
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
    resourcesToLoad = [...new Set([...resourcesToLoad, ...resources.map((r) => r.uri)])];
  }

  for (const uri of resourcesToLoad) {
    try {
      const content = await core.readResource(uri);
      resourcesUsed.push({ uri, content });
    } catch (e) {
      if (process.env.NODE_ENV !== "production")
        console.warn(`[MCP] readResource failed: ${uri}`, e);
    }
  }

  return resourcesUsed;
};
