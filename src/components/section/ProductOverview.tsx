"use client";

import { useTranslations } from "next-intl";
import { ProductOverviewItem, type ProductOverviewItemProps } from "./ProductOverviewItem";

export type ProductOverviewProps = {
  products: ProductOverviewItemProps[];
};

const ProductOverview = ({ products }: ProductOverviewProps) => {
  const t = useTranslations();
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 text-center">
        {products.length && (
          <div className="bg-blueGray-100 pt-12 pb-20 2xl:pb-22">
            <div className="border-black border-b border-opacity-5 pb-9 text-center">
              <div className="relative">
                <h2 className="mb-5 text-center font-heading font-medium text-5xl text-gray-900 leading-normal md:mb-0 xl:text-10xl">
                  {products[0].category}
                </h2>
                <span className="font-medium text-gray-400 text-sm md:absolute md:right-0 md:bottom-3">
                  {`${products.length} ${t("products.resultCountText")}`}
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductOverviewItem key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export { ProductOverview };
