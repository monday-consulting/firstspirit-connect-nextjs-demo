"use client";

import { mcpInit } from "@/lib/mcp/client/core/init";
import type { Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import { useEffect, useState } from "react";

export const useMcpInit = (enabled: boolean) => {
  const [availableTools, setAvailableTools] = useState<Tool[]>([]);
  const [availableResources, setAvailableResources] = useState<Resource[]>([]);
  const [availablePrompts, setAvailablePrompts] = useState<Prompt[]>([]);
  const [connectedServers, setConnectedServers] = useState<string[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!enabled) return;
    (async () => {
      try {
        const data = await mcpInit();

        setAvailableTools(data?.tools ?? []);
        setAvailableResources(data?.resources ?? []);
        setAvailablePrompts(data?.prompts ?? []);
        setConnectedServers(data?.connected ? ["default"] : []);
      } catch (error) {
        setError(error instanceof Error ? error : new Error("Unknown error occurred"));
        setAvailableTools([]);
        setAvailableResources([]);
        setAvailablePrompts([]);
        setConnectedServers([]);
      }
    })();
  }, [enabled]);

  return {
    availableTools,
    availableResources,
    availablePrompts,
    connectedServers,
    error,
  };
};
