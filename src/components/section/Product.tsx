"use client";

import { useMemo } from "react";
import { RichTextElement, type RichTextElementProps } from "../elements/RichTextElement";
import { FavoriteButton } from "../elements/FavoriteButton";
import type { Dataset, ImageData } from "@/types";
import { ImageComponent } from "@/components/elements/ImageComponent";

export type Product = {
  id: string;
  categories: Dataset[];
  description: RichTextElementProps;
  image: ImageData;
  name: string;
  price: string;
  teaserText: string;
};

export type ProductProps = {
  product: Product;
};

const Product = ({ product }: ProductProps) => {
  const currentDataset = product;

  const categoryNames = useMemo(() => {
    return currentDataset?.categories.flatMap(
      (category: { data: { tt_name: string } }) => category.data.tt_name
    );
  }, [currentDataset]);

  return (
    <div className="w-full py-12 lg:py-24">
      <div className="flex flex-col lg:flex-row lg:gap-24">
        <div className="w-full lg:w-1/2">
          <div className="mb-4">
            {categoryNames.map((category: string) => (
              <span
                key={category}
                className="mr-1 rounded-xl bg-textDark px-3 py-1 font-semibold text-white text-xs"
              >
                {category}
              </span>
            ))}
            <h1 className="mt-3 font-bold font-heading text-4xl">{currentDataset?.name}</h1>
          </div>
          <div className="flex items-start py-4">
            <div className="mb-5 font-medium text-text">
              <RichTextElement {...product.description} />
            </div>
          </div>
          <div className="w-full px-4">
            <FavoriteButton
              product={{
                id: product.id,
                title: currentDataset.name,
                image: product.image,
              }}
            />
          </div>
          <div className="mt-10 flex items-start border-lightGray border-t py-4 pt-10">
            <p className="text-lg text-textDark sm:text-3xl">{currentDataset.price}</p>
          </div>
        </div>
        {currentDataset?.image && (
          <ImageComponent
            src={currentDataset.image.src}
            alt={currentDataset.image.alt}
            imageClassName="rounded-xl"
            className="aspect-square w-full lg:w-1/2"
          />
        )}
      </div>
    </div>
  );
};

export { Product };
