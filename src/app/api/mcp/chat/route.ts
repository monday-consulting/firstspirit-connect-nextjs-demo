import { type Core, getMCPClientSingleton } from "@/lib/mcp/client/core/singleton";
import { NextResponse } from "next/server";

export const ensureConnected = async (core: Core) => {
  if (!core.isConnected()) {
    const url = process.env.MCP_SERVER_URL?.trim();
    console.log("Connecting to MCP server...");
    if (!url) throw new Error("MCP_SERVER_URL not set");
    await core.connectToMCPServer(url);
  }
};

export async function GET() {
  try {
    const { core } = getMCPClientSingleton();

    await ensureConnected(core);

    return NextResponse.json({
      tools: core.getAvailableTools(),
      resources: core.getAvailableResources(),
      prompts: core.getAvailablePrompts?.() ?? [],
      connected: core.isConnected(),
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        tools: [],
        resources: [],
        prompts: [],
        connected: false,
        cached: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      messages,
      useResources,
      usePrompts,
      customSystemPrompt,
      autoLoadAllResources = false,
      autoApplyRelevantPrompts = true,
    } = body || {};
    const { core, chatWithTools } = getMCPClientSingleton();

    await ensureConnected(core);

    const result = await chatWithTools(messages, {
      useResources,
      usePrompts,
      customSystemPrompt,
      autoLoadAllResources,
      autoApplyRelevantPrompts,
    });

    return NextResponse.json({
      ...result,
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
