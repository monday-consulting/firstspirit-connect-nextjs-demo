import type React from "react";
import ProductOverviewItem, { type ProductOverviewItemProps } from "./ProductOverviewItem";

export interface ProductListProps {
  category: {
    type: string;
    key: string;
    value: string;
    products: ProductOverviewItemProps[];
  };
}

const ProductOverview: React.FC<ProductListProps> = ({ category }) => {
  const { products } = category;

  const column1Items = products.filter((_, index) => index % 2 === 0);
  const column2Items = products.filter((_, index) => index % 2 === 1);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        {column1Items.map((item) => (
          // TODO: find useful key
          <ProductOverviewItem key={item.headline} {...item} />
        ))}
      </div>
      <div className="mt-20 flex flex-col gap-4">
        {column2Items.map((item) => (
          <ProductOverviewItem key={item.headline} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductOverview;
