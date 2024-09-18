import { Product } from "@/components/section/Product";
import { getProductDetail } from "@/gql/documents/products";

const ProductDetailPage = async ({ params }: { params: { id: string; locale: string } }) => {
  const product = await getProductDetail(params.locale, params.id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Product
        product={{
          id: params.id,
          categories: product.tt_categories,
          description: {
            content: product.tt_description,
          },
          image: {
            src: product.tt_image.resolutions.ORIGINAL.url,
            alt: product.tt_image_alt_text,
          },
          name: product.tt_name,
          price: product.tt_price,
          teaserText: product.tt_teaserText,
        }}
      />
    </main>
  );
};

export default ProductDetailPage;
