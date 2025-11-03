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
    (async () => {
      try {
        const data = await mcpInit(locale);

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
  }, [enabled, locale]);

  return {
    availableTools,
    availableResources,
    availablePrompts,
    connectedServers,
    error,
  };
};
