import { ProductOverview } from "@/components/sections/ProductOverview";
import { getAllProducts } from "@/gql/documents/products";
import type { Locale } from "@/i18n/config";
import { getProductDetailLink } from "@/utils/links";
import { redirect } from "next/navigation";

const SlugPage = async (props: {
  params: Promise<{ locale: Locale; product_group: string }>;
}) => {
  const params = await props.params;
  const allProducts = await getAllProducts(params.locale);

  const filteredProducts = allProducts.filter((item) => {
    if (item.data.__typename === "FirstSpiritSmartlivingProduct") {
      const ttName = item.data.ttCategories[0].data.tt_name;
      return ttName?.toLowerCase().replaceAll(" ", "-") === decodeURI(params.product_group);
    }
  });

  if (filteredProducts.length < 1) {
    redirect("/");
  }

  const products = filteredProducts
    .map((item) => {
      if (item && item.data.__typename === "FirstSpiritSmartlivingProduct") {
        return {
          route: item.route,
          data: item.data,
          id: item.fsId,
        };
      }
    })
    .filter((item) => item != null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-12 md:px-24">
      <ProductOverview
        products={products.map((item) => ({
          image: {
            src:
              (item.data.ttImage?.__typename === "FirstSpiritImage" &&
                item.data.ttImage.resolutions?.original?.url) ||
              "",
            alt: item.data.ttImageAltText || "",
          },
          category: item.data.ttCategories[0].data.tt_name,
          name: item.data.ttName || "",
          price: item.data.ttPrice || "",
          id: item.id,
          route: getProductDetailLink(item.id, params.locale),
        }))}
      />
    </main>
  );
};

export default SlugPage;
