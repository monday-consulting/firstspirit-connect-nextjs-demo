import type React from "react";
import { Teaser } from "./Teaser";
import ProductOverview from "./ProductOverview";
import type { ProductOverviewItemProps } from "./ProductOverviewItem";
import type { RichTextElementProps } from "../elements/RichTextElement";

export interface ProductTeaserProps {
  categoryProduct: {
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
  };
}

const getProductLink = (categoryProduct: ProductTeaserProps["categoryProduct"]) => {
  return categoryProduct.category_link.href;
};

const ProductTeaser = ({ categoryProduct }: ProductTeaserProps) => {
  const textContent = categoryProduct.text.map((item) => item.content).join(" ");
  const productLink = getProductLink(categoryProduct);
  return (
    <div className="radius-for-skewed bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-20">
          <div className="m-auto">
            <Teaser
              headline={categoryProduct.headline}
              text={textContent}
              imageLeft={false}
              cta={{ href: productLink, linkText: categoryProduct.category_link.linkText }}
            />
          </div>

          <ProductOverview category={categoryProduct.category} />
        </div>
      </div>
    </div>
  );
};

export default ProductTeaser;
