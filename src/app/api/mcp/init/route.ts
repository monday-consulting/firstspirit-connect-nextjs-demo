import { getMCPClientSingleton } from "@/lib/mcp/client/core/singleton";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { core } = getMCPClientSingleton();
    if (!core.isConnected()) {
      console.log("Connecting to MCP server...");
      const url = process.env.MCP_SERVER_URL?.trim();
      if (!url) throw new Error("MCP_SERVER_URL not set");
      await core.connectToMCPServer(url);
    }
    return NextResponse.json({
      ok: true,
      connected: core.isConnected(),
      tools: core.getAvailableTools(),
      resources: core.getAvailableResources(),
      prompts: core.getAvailablePrompts(),
      connectedServers: core.isConnected() ? ["default"] : [],
    });
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ ok: false, error: errorMessage }, { status: 500 });
  }
}
