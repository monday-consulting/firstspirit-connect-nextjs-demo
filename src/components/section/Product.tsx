"use client";

import React, { useMemo } from "react";
import type { ProductData } from "../elements/ProductTeaser";
import RichTextElement from "../elements/RichTextElement";
import { FavoriteButton } from "../elements/FavoriteButton";
import Image from "next/image";

export type ProductProps = {
  data: ProductData;
};

const Product = ({ data }: ProductProps) => {
  const currentDataset = data;

  const categoryNames = useMemo(() => {
    return currentDataset?.categories.flatMap(
      (category: { data: { name: string } }) => category.data.name
    );
  }, [currentDataset]);

  const { richTextTypes, richTextContents, richTextData } = currentDataset.description.reduce(
    (acc, item) => {
      acc.richTextTypes.push(item.type);
      if (typeof item.content === "string") {
        acc.richTextContents.push(item.content);
      }
      acc.richTextData.push(item.data);
      return acc;
    },
    {
      richTextTypes: [] as string[],
      richTextContents: [] as string[],
      richTextData: [] as string[],
    }
  );

  const favoriteButtonId = currentDataset.categories.map((item) => item.id).join(" ");

  // combine all arrays to string
  const combinedRichTextType = richTextTypes.join(" ");
  const combinedRichTextContent = richTextContents.join(" ");
  const combinedRichTextData = richTextData.join(" ");

  return (
    <section
      className="overflow-x-hidden py-12 md:py-32"
      data-testid="productSection"
      data-preview-id={currentDataset?.categories.map((item) => item.previewId)}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2">
            <div className="py-6 lg:pr-32">
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
                <p className="mb-5 font-medium text-textDark">
                  <RichTextElement
                    content={combinedRichTextContent}
                    data={combinedRichTextData}
                    type={combinedRichTextType}
                  />
                </p>
              </div>
              <div className="w-full px-4">
                <FavoriteButton
                  product={{
                    id: favoriteButtonId,
                    title: currentDataset.name,
                    image: data.image,
                  }}
                />
              </div>
              <div className="mt-10 flex items-start border-lightGray border-t py-4 pt-10">
                <p className="text-lg text-textDark sm:text-3xl">{currentDataset.price}</p>
              </div>
            </div>
          </div>
          <div className="relative my-12 w-full lg:my-0 lg:w-1/2">
            {currentDataset?.image && (
              <Image
                src={currentDataset.image.src}
                alt={currentDataset.image.alt}
                width={1000}
                height={800}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Product };
