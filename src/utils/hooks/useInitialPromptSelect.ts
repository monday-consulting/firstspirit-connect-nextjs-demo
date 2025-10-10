import type { Prompt } from "@modelcontextprotocol/sdk/types.js";
import { useEffect } from "react";

export const useInitialPromptSelect = (
  availablePrompts: Prompt[],
  setSelectedPrompts: React.Dispatch<React.SetStateAction<{ name: string }[]>>
) => {
  useEffect(() => {
    if (!availablePrompts) return;
    setSelectedPrompts(availablePrompts.map((p) => ({ name: p.name })));
  }, [availablePrompts, setSelectedPrompts]);

  return availablePrompts;
};
