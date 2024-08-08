"use client";
import ProductTeaser from "../elements/ProductTeaser";
import type { Dataset, ProductTeaserProps } from "../elements/ProductTeaser";
import { useEffect, useState } from "react";

export type CategoryProductListProps = {
  category: {
    data: Dataset[];
  };
  categoryId: string;
};

const splitProducts = (products: Dataset[]) => {
  const column1Items = products.filter((_, index) => index % 2 === 0);
  const column2Items = products.filter((_, index) => index % 2 === 1);
  return { column1Items, column2Items };
};

const CategoryProductsList = ({ category, categoryId }: CategoryProductListProps) => {
  const [column1Items, setColumn1Items] = useState<Dataset[]>([]);
  const [column2Items, setColumn2Items] = useState<Dataset[]>([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setPending(true);
      try {
        const response = await fetch(`exampleUrl?category=${categoryId}`);
        let products: Dataset[] = [];

        if (response.ok) {
          products = await response.json();
        } else {
          products = category.data;
        }

        const { column1Items, column2Items } = splitProducts(products);
        setColumn1Items(column1Items);
        setColumn2Items(column2Items);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setPending(false);
      }
    };

    fetchProducts();
  }, [categoryId, category.data]);

  if (pending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        {column1Items.map((item) => (
          <ProductTeaser
            key={item.id}
            data={item.data as ProductTeaserProps["data"]}
            route={item.route}
          />
        ))}
      </div>
      <div className="mt-20 flex flex-col gap-4">
        {column2Items.map((item) => (
          <ProductTeaser
            key={item.id}
            data={item.data as ProductTeaserProps["data"]}
            route={item.route}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProductsList;
