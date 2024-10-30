import { Product } from "@/components/sections/Product";
import { getProductDetail } from "@/gql/documents/products";
import type { Locale } from "@/i18n/config";

const ProductDetailPage = async (props: { params: Promise<{ id: string; locale: Locale }> }) => {
  const params = await props.params;
  const product = await getProductDetail(params.locale, params.id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-12 md:px-24">
      {product?.__typename === "FirstSpiritSmartlivingProduct" && (
        <Product
          product={{
            id: params.id,
            categories: product.ttCategories,
            description: {
              content: product.ttDescription,
            },
            image: {
              src:
                (product.ttImage?.__typename === "FirstSpiritImage" &&
                  product.ttImage.resolutions?.original?.url) ||
                "",
              alt: product.ttImageAltText || "",
            },
            name: product.ttName || "",
            price: product.ttPrice || "",
            teaserText: product.ttTeaserText || "",
          }}
        />
      )}
    </main>
  );
};

export default ProductDetailPage;
