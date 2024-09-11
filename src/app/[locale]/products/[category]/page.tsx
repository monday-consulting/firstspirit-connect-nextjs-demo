import { ProductOverview } from "@/components/section/ProductOverview";
import { getAllProducts } from "@/gql/documents/products";
import { getProductDetailLink } from "@/utils/links";

const CategoryPage = async ({
  params,
}: {
  params: { locale: string; category: string };
}) => {
  const allProducts = await getAllProducts(params.locale);

  console.log(params.category);

  const filteredProducts = allProducts.filter((item) => {
    const parsedData = JSON.parse(item.data);
    return parsedData.tt_categories[0].schema === params.category;
  });

  const products = filteredProducts.map((item) => ({
    route: item.route,
    data: JSON.parse(item.data),
    id: item.fsId,
  }));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <ProductOverview
        products={products.map((item) => ({
          image: {
            src: item.data.tt_image.resolutions.ORIGINAL.url,
            alt: item.data.tt_image_alt_text,
          },
          category: item.data.tt_categories[0].data.tt_name,
          name: item.data.tt_name,
          price: item.data.tt_price,
          id: item.id,
          route: getProductDetailLink(item.id),
        }))}
      />
    </main>
  );
};

export default CategoryPage;
