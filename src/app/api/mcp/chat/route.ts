import { getMCPClientSingleton } from "@/lib/mcp/client/core/singleton";
import { NextResponse } from "next/server";

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

    if (!core.isConnected()) {
      const url = process.env.MCP_SERVER_URL?.trim();
      console.log("Connecting to MCP server... CHAT");
      if (!url) throw new Error("MCP_SERVER_URL not set");
      await core.connectToMCPServer(url);
    }

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
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
