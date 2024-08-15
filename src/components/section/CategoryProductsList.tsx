"use client";
import { useEffect, useState } from "react";
import { ProductTeaser, type ProductTeaserProps } from "../elements/ProductTeaser";

export type CategoryProductListProps = {
  products: ProductTeaserProps[];
};

const splitProducts = (products: ProductTeaserProps[]) => {
  const col1 = products.filter((_, index) => index % 2 === 0);
  const col2 = products.filter((_, index) => index % 2 === 1);
  return { col1, col2 };
};

const CategoryProductsList = ({ products }: CategoryProductListProps) => {
  const [columns, setColumns] = useState<{
    col1: ProductTeaserProps[];
    col2: ProductTeaserProps[];
  }>({
    col1: [],
    col2: [],
  });

  useEffect(() => {
    if (products && products.length > 0) setColumns(splitProducts(products));
  }, [products]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        {columns.col1.map((item, index) => (
          <ProductTeaser key={index} {...item} />
        ))}
      </div>
      <div className="mt-20 flex flex-col gap-4">
        {columns.col2.map((item, index) => (
          <ProductTeaser key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export { CategoryProductsList };
