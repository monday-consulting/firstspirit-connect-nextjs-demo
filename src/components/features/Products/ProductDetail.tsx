"use client";

import { useMemo } from "react";
import { ImageComponent } from "@/components/globals/ImageComponent";
import { RichTextElement, type RichTextElementProps } from "@/components/globals/RichTextElement";
import { FavoriteButton } from "@/components/layouts/Navigation/Favorites/FavoriteButton";
import type { FirstSpiritDataset } from "@/lib/gql/generated/graphql";
import type { ImageData } from "@/types";

export type Product = {
  id: string;
  categories: ({
    __typename?: "FirstSpiritDataset";
    data: FirstSpiritDataset["data"];
  } | null)[];
  description: RichTextElementProps;
  image: ImageData;
  name: string;
  price: string;
  teaserText: string;
};

export type ProductDetailProps = {
  product: Product;
};

const ProductDetail = ({ product }: ProductDetailProps) => {
  const categoryNames = useMemo(() => {
    return product?.categories.flatMap(
      (category) =>
        category?.data.__typename === "FirstSpiritSmartlivingCategory" && category.data.ttName
    );
  }, [product]);
  return (
    <div className="w-full py-12 lg:py-24">
      <div className="flex flex-col lg:flex-row lg:gap-24">
        <div className="w-full lg:w-1/2">
          <div className="mb-4">
            {categoryNames
              .filter((category): category is string => typeof category === "string")
              .map((category) => (
                <span
                  key={category}
                  className="mr-1 rounded-xl bg-textDark px-3 py-1 font-semibold text-white text-xs"
                >
                  {category}
                </span>
              ))}
            <h1 className="mt-3 font-bold font-heading text-4xl">{product?.name}</h1>
          </div>
          <div className="flex items-start py-4">
            <div className="mb-5 font-medium text-text">
              <RichTextElement
                {...product.description}
                data-preview-id="#st_product_detail_description"
              />
            </div>
          </div>
          <div className="w-full px-4">
            <FavoriteButton
              product={{
                id: product.id,
                title: product.name,
                image: product.image,
              }}
            />
          </div>
          <div className="mt-10 flex items-start border-lightGray border-t py-4 pt-10">
            <p className="text-lg text-textDark sm:text-3xl">{product.price}</p>
          </div>
        </div>
        {product?.image && (
          <ImageComponent
            src={product.image.src}
            alt={product.image.alt}
            imageClassName="rounded-xl"
            className="aspect-square w-full lg:w-1/2"
            data-preview-id="#st_product_detail_image"
          />
        )}
      </div>
    </div>
  );
};

export { ProductDetail };
