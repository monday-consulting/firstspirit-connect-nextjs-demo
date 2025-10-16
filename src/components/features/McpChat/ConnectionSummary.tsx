import type { Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import { useTranslations } from "next-intl";

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
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold">Status</span>
      <div className="grid grid-cols-4 gap-2 rounded border border-gray p-2">
        <div className="flex flex-col items-center gap-1">
          <div>{t("chat.connected")}</div>
          <div className="text-md">{connectedServers.length > 0 ? "✅" : "🚫"}</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div>{t("chat.tools")}</div>
          <div className="font-semibold">{availableTools.length}</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div>{t("chat.resources")}</div>
          <div className="font-semibold">{availableResources.length}</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div>{t("chat.prompts")}</div>
          <div className="font-semibold">{availablePrompts.length}</div>
        </div>
      </div>
    </div>
  );
};
