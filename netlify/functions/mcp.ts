import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { toFetchResponse, toReqRes } from "fetch-to-node";
import { z } from "zod";
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import {
  CallToolResult,
  ReadResourceResult,
  JSONRPCError
} from "@modelcontextprotocol/sdk/types.js";
import { getNavigationStructure } from "@/gql/documents/navigation";
import type { Locale } from "next-intl";
import { NavigationStructure } from "@/components/layouts/Navigation/Navigation";
import { stripNavigationFiles } from "@/utils/links";
import { locales } from "@/i18n/config";
import { getPageContentByRoute } from "@/gql/documents/pageContent";

// Netlify serverless function handler which handles all inbound requests
export default async (req: Request) => {

  try {

    // for stateless MCP, we'll only use the POST requests that are sent
    // with event information for the init phase and resource/tool requests
    if (req.method === "POST") {

      // Convert the Request object into a Node.js Request object
      const { req: nodeReq, res: nodeRes } = toReqRes(req);
      const server = getServer();

      const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: undefined,
      });

      await server.connect(transport);

      const body = await req.json();
      await transport.handleRequest(nodeReq, nodeRes, body);

      nodeRes.on("close", () => {
        console.log("Request closed");
        transport.close();
        server.close();
      });

      return toFetchResponse(nodeRes);

    }

    return new Response("Method not allowed", { status: 405 });

  } catch (error) {

    console.error("MCP error:", error);
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        error: {
          code: -32603,
          message: "Internal server error",
        },
        id: '',
      } satisfies JSONRPCError),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

function getServer(): McpServer {

  // initialize our MCP Server instance that we will
  // attach all of our functionality and data.
  const server = new McpServer(
    {
      name: "acme-devtool-server",
      version: "1.0.0",
    },
    { capabilities: { logging: {} } }
  );


  server.tool(
    "run-analysis-report",
    "Checks the data available in Acme Devtool and returns all of the important data regarding the latest numbers.",
    {
      days: z.number().describe("Number of days to analyze").default(7),
    },
    async (
      { days },
    ): Promise<CallToolResult> => {

      const random = Math.random() * 100;

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              lastNDays: days,
              data: Array.from({ length: days }, (_, i) => `Day ${i + 1} had ${random * days} growth.`),
            }),
          },
        ],
      };
    }
  );

  // providing a resource for agents that might need to take a given report
  server.resource(
    "interpreting-reports",
    "acme://interpreting-reports",
    { mimeType: "text/plain" },
    async (): Promise<ReadResourceResult> => {
      return {
        contents: [
          {
            uri: "acme://interpreting-reports",
            text: `Reports from Acme will include an array of text that informs the growth of over that number of days. It's unstructured text but is consistent so parsing the information can be based on looking at a single line to understand where the data is.`,
          },
        ],
      };
    }
  );

  // Dynamic resource with parameters
  server.resource(
    "fs-pages",
    new ResourceTemplate("fs://{locale}/{route}", { list: undefined }),
    async (uri, { locale, route }) => ({
      contents: [{
        uri: uri.href,
        text: await magicHere(locale.toString(), route.toString())
      }]
    })
  );


  server.resource(
    "first-spirit-stuff",
    "acme://fs-stuff",
        async (): Promise<ReadResourceResult> => {
          const locale : Locale = "en-GB"
          const structure = await getNavigationStructure(locale);
          const navStructure =
            {
              structure: structure?.map((layerA) => ({
                fsNavItemId: layerA?.navigationItem.fsNavItemId,
                label: layerA?.navigationItem.label,
                seoRoute: stripNavigationFiles(layerA?.navigationItem.seoRoute),
                children: layerA?.structureChildren.map((layerB) => ({
                  fsNavItemId: layerB?.navigationItem.fsNavItemId,
                  label: layerB?.navigationItem.label,
                  seoRoute: stripNavigationFiles(layerB?.navigationItem.seoRoute),
                  children: layerB?.structureChildren.map((layerC) => ({
                    fsNavItemId: layerC?.navigationItem.fsNavItemId,
                    label: layerC?.navigationItem.label,
                    seoRoute: stripNavigationFiles(layerC?.navigationItem.seoRoute),
                  })),
                })),
              })),
            } as NavigationStructure
      return {
        contents: [
          {
            uri: "fs-resource://pages/{pageId}",
            text: navStructure.structure[0].seoRoute || "hi"
          },
        ],
      };
    }
  )

  return server;
};

// Ensure this function responds to the <domain>/mcp path
// This can be any path you want but you'll need to ensure the
// mcp server config you use/share matches this path.
export const config = {
  path: "/mcp"
};

async function magicHere (localeString: string, routeString: string) : Promise<string> {
  const locale : Locale = localeString as Locale;
  const structure = await getNavigationStructure(locale);
  const navStructure =
    {
      structure: structure?.map((layerA) => ({
        fsNavItemId: layerA?.navigationItem.fsNavItemId,
        label: layerA?.navigationItem.label,
        seoRoute: stripNavigationFiles(layerA?.navigationItem.seoRoute),
        children: layerA?.structureChildren.map((layerB) => ({
          fsNavItemId: layerB?.navigationItem.fsNavItemId,
          label: layerB?.navigationItem.label,
          seoRoute: stripNavigationFiles(layerB?.navigationItem.seoRoute),
          children: layerB?.structureChildren.map((layerC) => ({
            fsNavItemId: layerC?.navigationItem.fsNavItemId,
            label: layerC?.navigationItem.label,
            seoRoute: stripNavigationFiles(layerC?.navigationItem.seoRoute),
          })),
        })),
      })),
    } as NavigationStructure
    
    const seoRoute = structure?.find(el => el?.navigationItem.seoRoute?.includes(routeString))
    if (seoRoute && seoRoute.navigationItem.seoRoute) {
      return JSON.stringify(getPageContentByRoute(locale, seoRoute.navigationItem.seoRoute));
    }


    // wenn route string in der structure vorkommt --> dann Seite returnen
    // wenn nicht error message oder leeres Objekt --> muss in der Beschreibung stehen,
    // damit der Client und das LLM das interpretieren können

    // wie fixe ich das mit der locale?


  return "hello"
}