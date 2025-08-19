import { type Core, createCore } from "@/lib/mcp/client/core/clientCore";
import { createMessage } from "@/lib/mcp/client/core/createMessage";
import { pickPreset } from "@/lib/mcp/client/core/prompts";
import { NextResponse } from "next/server";

const ensureConnected = async (core: Core) => {
  if (!core.isConnected()) {
    const url = process.env.MCP_SERVER_URL?.trim();
    if (!url) throw new Error("MCP_SERVER_URL not set");
    await core.connectToMCPServer(url);
  }
};

export async function GET() {
  try {
    const core = createCore();
    await ensureConnected(core);

    return NextResponse.json({
      tools: core.getAvailableTools(),
      resources: core.getAvailableResources(),
      prompts: core.getAvailablePrompts(),
      connected: core.isConnected(),
    });
  } catch (e) {
    return NextResponse.json(
      { tools: [], resources: [], prompts: [], connected: false, error: String(e) },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { messages, customSystemPrompt, useResources, autoLoadAllResources } = body || {};

    const core = createCore();
    await ensureConnected(core);

    const sysPreset = customSystemPrompt ? pickPreset(customSystemPrompt) : core.getSystemPrompt();

    const result = await createMessage({
      core,
      sysPreset,
      chatMessages: messages,
      tools: core.getAvailableTools(),
      resources: core.getAvailableResources(),
      prompts: core.getAvailablePrompts(),
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
