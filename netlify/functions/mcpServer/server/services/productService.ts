import type { Locale } from "next-intl";
import { getAllProducts } from "@/lib/gql/documents/products";
import { extractRoutesFromProducts } from "../firstSpirit/extractProductRoutes";
import { handleGraphQLError } from "../helper/graphqlErrorHandler";
import { turnProductContentIntoMarkdown } from "../markdown/contentToMarkdown";
import { generateDynamicDescription } from "../markdown/description";

export type ProductEndpointProps = {
  name: string;
  title: string;
  description: string;
  content: string;
  uri: string;
};

export const getProductEndpoints = async (locale: Locale): Promise<ProductEndpointProps[]> => {
  const structure = await getAllProducts(locale);
  const routes = extractRoutesFromProducts(structure);

  // Process all products in parallel for better performance
  const results = await Promise.all(
    routes.map(({ slug, fsId }) => processProduct(locale, slug, fsId))
  );

  return results.flat();
};

export const processProduct = async (
  locale: Locale,
  slug: string,
  fsId: string
): Promise<ProductEndpointProps[]> => {
  try {
    const content = await turnProductContentIntoMarkdown(locale, fsId);

    if (!content.trim()) return [];

    const description = generateDynamicDescription({
      name: slug,
      content,
    });

    const nameMatch = content.match(/\*\*Name:\*\*\s*(.+)/);
    const productName = nameMatch?.[1].trim() ?? slug;

    return [
      {
        name: productName,
        title: `${slug} - Markdown content`,
        description,
        content,
        uri: `${slug}`,
      },
    ];
  } catch (error) {
    handleGraphQLError(error, "Product processing", slug);
    return [];
  }
};
