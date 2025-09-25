import { redirect } from "next/navigation";
import type { Locale } from "next-intl";
import { ProductOverview } from "@/components/features/Products/ProductOverview";
import { getAllProducts } from "@/lib/gql/documents/products";
import { getProductDetailLink } from "@/utils/links";
import { FirstSpiritSmartlivingProduct } from "@/lib/gql/generated/graphql";

const SlugPage = async (props: { params: Promise<{ locale: Locale; product_group: string }> }) => {
  const params = await props.params;
  const allProducts = await getAllProducts(params.locale);

  function isSmartlivingProduct(
    item: (typeof allProducts)[number],
    productGroup: string
  ): item is typeof item & { data: { __typename: "FirstSpiritSmartlivingProduct" } } {
    return (
      item.data.__typename === "FirstSpiritSmartlivingProduct" &&
      item.data.ttCategories?.some(
        (category) =>
          category?.data?.__typename === "FirstSpiritSmartlivingCategory" &&
          category.data.ttName?.toLowerCase().replaceAll(" ", "-").includes(decodeURI(productGroup))
      ) === true
    );
  }

  const filteredProducts = allProducts.filter((item) =>
    isSmartlivingProduct(item, params.product_group)
  );

  if (filteredProducts.length < 1) {
    redirect("/");
  }

  const products = filteredProducts.map((item) => ({
    route: item.route,
    data: item.data,
    id: item.fsId,
  }));

  const categoryNames = (item: FirstSpiritSmartlivingProduct) =>
    item.ttCategories
      ?.filter(
        (category) =>
          category?.data?.__typename === "FirstSpiritSmartlivingCategory" &&
          typeof category.data.ttName === "string"
      )
      .map(
        (category) =>
          category?.data.__typename === "FirstSpiritSmartlivingCategory" && category.data.ttName
      )
      .join(", ") || "";

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
          category: categoryNames(item.data as FirstSpiritSmartlivingProduct),
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
