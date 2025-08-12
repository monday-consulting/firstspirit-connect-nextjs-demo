import { createCore } from "./clientCore";
import { buildChat } from "./chat";

type Core = ReturnType<typeof createCore>;
type ChatWithTools = ReturnType<typeof buildChat>;

let instance: { core: Core; chatWithTools: ChatWithTools } | null = null;

export const getMCPClientSingleton = () => {
  if (instance) return instance;

  const apiKey = process.env.ANTHROPIC_API_KEY?.trim();
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY is missing.");

  const core = createCore(apiKey);
  const chatWithTools = buildChat(core);
  instance = Object.freeze({ core, chatWithTools });
  return instance;
};
