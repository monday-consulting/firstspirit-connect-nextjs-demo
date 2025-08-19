import { createChat } from ".";
import { createCore } from "./clientCore";

export type Core = ReturnType<typeof createCore>;
export type ChatWithTools = ReturnType<typeof createChat>;

let instance: { core: Core; chatWithTools: ChatWithTools } | null = null;

export const getMCPClientSingleton = () => {
  if (instance) return instance;

  const apiKey = process.env.ANTHROPIC_API_KEY?.trim();
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY is missing.");

  const core = createCore(apiKey);
  const chatWithTools = createChat(core);
  instance = Object.freeze({ core, chatWithTools });
  return instance;
};
