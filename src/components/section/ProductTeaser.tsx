import type React from "react";
import { Teaser } from "./Teaser";
import ProductOverview from "./ProductOverview";
import type { ProductOverviewItemProps } from "./ProductOverviewItem";
import type { RichTextElementProps } from "../elements/RichTextElement";

interface ProductTeaserProps {
  category: {
    type: string;
    key: string;
    value: string;
    products: ProductOverviewItemProps[];
  };
  category_link: {
    href: string;
    linkText: string;
  };
  headline: string;
  text: RichTextElementProps[];
}

const ProductTeaser = ({ category, category_link, headline, text }: ProductTeaserProps) => {
  const textContent = text.map((item) => item.content).join(" ");

  return (
    <div className="radius-for-skewed bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-20">
          <div className="m-auto">
            <Teaser headline={headline} text={textContent} imageLeft={false} cta={category_link} />
          </div>
          <ProductOverview category={category} />
        </div>
      </div>
    </div>
  );
};

export default ProductTeaser;
