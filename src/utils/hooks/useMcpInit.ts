"use client";

import type { Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { mcpInit } from "@/lib/mcp/client/core/init";

export const useMcpInit = (enabled: boolean) => {
  const locale = useLocale();
  const [availableTools, setAvailableTools] = useState<Tool[]>([]);
  const [availableResources, setAvailableResources] = useState<Resource[]>([]);
  const [availablePrompts, setAvailablePrompts] = useState<Prompt[]>([]);
  const [connectedServers, setConnectedServers] = useState<string[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!enabled) return;

    let retryTimeout: NodeJS.Timeout | null = null;
    let isCancelled = false;

    const initializeMcp = async (retryCount = 0) => {
      if (isCancelled) return;

      try {
        const data = await mcpInit(locale);

        if (isCancelled) return;

        setAvailableTools(data?.tools ?? []);
        setAvailableResources(data?.resources ?? []);
        setAvailablePrompts(data?.prompts ?? []);
        setConnectedServers(data?.connected ? ["default"] : []);
        setError(null);

        // If we got empty data and we're in dev mode, retry after a delay
        if (!data.connected && process.env.NODE_ENV === "development" && retryCount < 5) {
          const delay = Math.min(1000 * 2 ** retryCount, 5000); // Exponential backoff, max 5s
          console.log(
            `[MCP Client] Server not ready, retrying in ${delay}ms (attempt ${retryCount + 1}/5)`
          );
          retryTimeout = setTimeout(() => initializeMcp(retryCount + 1), delay);
        }
      } catch (error) {
        if (isCancelled) return;

        setError(error instanceof Error ? error : new Error("Unknown error occurred"));
        setAvailableTools([]);
        setAvailableResources([]);
        setAvailablePrompts([]);
        setConnectedServers([]);
      }
    };

    initializeMcp();

    return () => {
      isCancelled = true;
      if (retryTimeout) {
        clearTimeout(retryTimeout);
      }
    };
  }, [enabled, locale]);

  return {
    availableTools,
    availableResources,
    availablePrompts,
    connectedServers,
    error,
  };
};
