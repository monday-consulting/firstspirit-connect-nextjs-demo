import { type Core, createCore } from "@/lib/mcp/client/core/clientCore";
import { createMessage } from "@/lib/mcp/client/core/createMessage";
import { pickPreset } from "@/lib/mcp/client/core/prompts";
import { NextResponse } from "next/server";

let coreSingleton: Core | null = null;
let connectPromise: Promise<void> | null = null;

const getCore = (): Core => {
  if (coreSingleton === null) {
    coreSingleton = createCore();
  }
  return coreSingleton;
};

const ensureConnected = async (core: Core) => {
  if (core.isConnected()) return true;

  const url = process.env.MCP_SERVER_URL?.trim();
  if (!url) throw new Error("MCP_SERVER_URL not set");

  if (!connectPromise) {
    connectPromise = core.connectToMCPServer(url).finally(() => {
      connectPromise = null;
    });
  }
  await connectPromise;
  return core.isConnected();
};

export async function GET() {
  try {
    const core = getCore();
    await ensureConnected(core);

    return NextResponse.json({
      tools: core.getAvailableTools(),
      resources: core.getAvailableResources(),
      prompts: core.getAvailablePrompts(),
      connected: core.isConnected(),
    });
  } catch (error) {
    return NextResponse.json(
      { tools: [], resources: [], prompts: [], connected: false, error: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, customSystemPrompt, useResources, autoLoadAllResources, usedUserPrompt } =
      body || {};

    const core = getCore();
    const isConnected = await ensureConnected(core);

    const sysPreset = customSystemPrompt ? pickPreset(customSystemPrompt) : core.getSystemPrompt();

    const result = await createMessage({
      core,
      sysPreset,
      chatMessages: messages,
      tools: core.getAvailableTools(),
      resources: core.getAvailableResources(),
      prompts: core.getAvailablePrompts(),
      usedUserPrompt,
      options: { useResources, autoLoadAllResources },
    });

    return NextResponse.json({
      response: result.response,
      toolsUsed: result.toolsUsed,
      resourcesUsed: result.resourcesUsed,
      promptsUsed: result.promptsUsed,
      availableTools: core.getAvailableTools(),
      availableResources: core.getAvailableResources(),
      availablePrompts: core.getAvailablePrompts(),
      connectedServers: core.isConnected() ? ["default"] : [],
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
