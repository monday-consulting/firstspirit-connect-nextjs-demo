import { getAllProducts } from "@/lib/gql/documents/products";
import { getSectionById } from "@/lib/gql/documents/section";
import type { FetcherBody } from "@/utils/fetcher";
import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

export async function POST(req: NextRequest) {
  const body = (await req.json()) as FetcherBody;
  console.log("API-HANDLER: /api/fetch", body);

  let data = undefined;

  if (body) {
    try {
      switch (body.type) {
        case "product":
          data = await getAllProducts(body.locale);
          break;
        case "section":
          if (!body.id) {
            throw new Error("No id provided");
          }
          data = await getSectionById(body.locale, body.id);
          break;
        default:
          throw new Error("No type provided");
      }
    } catch (error) {
      console.error("Error fetching data", error);
      return NextResponse.error();
    }
  }

  return NextResponse.json(data);
}
