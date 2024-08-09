import type { FeaturedProductItemProps } from "../elements/FeaturedProductItem";
import { FeaturedProductItem } from "../elements/FeaturedProductItem";

export type FeaturedProductsProps = {
  headline: string;
  subline: string;
  products: FeaturedProductItemProps[];
};
const FeaturedProducts = ({ headline, subline, products }: FeaturedProductsProps) => {
  return (
    <>
      <div className="-top-10 -z-10 absolute hidden h-full w-3/4 border-[20px] border-gray-100 md:block" />
      <div className="w-1/3 text-gray-400 sm:px-2 md:px-8">
        <h2 className="mt-4 ml-4 text-4xl uppercase" data-preview-id="#st_featured_products_title">
          {headline}
        </h2>
        <h3
          v-if="data.st_featured_products_header"
          className="ml-4"
          data-preview-id="#st_featured_products_header"
        >
          {subline}
        </h3>
      </div>
      <div className="grid h-4/5 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:pl-8 2xl:grid-cols-4">
        {products.map((product) => (
          <FeaturedProductItem key={product.name} {...product} />
        ))}
      </div>
    </>
  );
};

export { FeaturedProducts };
