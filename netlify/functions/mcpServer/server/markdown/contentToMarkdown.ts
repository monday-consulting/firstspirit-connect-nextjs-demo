import type { Locale } from "next-intl";
import { getProductDetail } from "@/lib/gql/documents/products";
import type { FirstSpiritInlineDatasetUnionB50D929C } from "@/lib/gql/generated/graphql";
import { processFirstSpirintInlineInput } from "../firstSpirit/processGenericTemplate";
import { processFirstSpiritPage } from "../firstSpirit/processPage";
import { getPageContent } from "../services/pageService";

/**
 * Get the page content for the given route and locale
 * Transform the content into markdown
 */
export const turnPageContentIntoMarkdown = async (
  locale: Locale,
  route: string
): Promise<string> => {
  const pageContent = await getPageContent(locale, route);

  if (!pageContent?.data) {
    return "";
  }

  return await processFirstSpiritPage(pageContent.data, pageContent);
};

/**
 * Get the product content for the given route and locale
 * Transform the content into markdown
 */
export const turnProductContentIntoMarkdown = async (
  locale: Locale,
  id: string
): Promise<string> => {
  const productDetail = await getProductDetail(locale, id);
  return processFirstSpirintInlineInput(productDetail as FirstSpiritInlineDatasetUnionB50D929C);
};
