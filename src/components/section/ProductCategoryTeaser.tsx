import type React from "react";
import { Teaser } from "./Teaser";
import CategoryProductsList from "./CategoryProductsList";
import type { RichTextElementProps } from "../elements/RichTextElement";
import type { Dataset } from "../elements/ProductTeaser";

export interface ProductCategoryTeaserProps {
  categoryProduct: {
    category: {
      type: string;
      key: string;
      value: string;
      products: Dataset[];
    };
    category_link: {
      href: string;
      linkText: string;
    };
    headline: string;
    text: RichTextElementProps[];
  };
}

const getProductLink = (categoryProduct: ProductCategoryTeaserProps["categoryProduct"]) => {
  return categoryProduct.category_link.href;
};

const ProductTeaser = ({ categoryProduct }: ProductCategoryTeaserProps) => {
  const textContent = categoryProduct.text.map((item) => item.content).join(" ");
  const productLink = getProductLink(categoryProduct);

  const categoryProductsListData = {
    data: categoryProduct.category.products,
  };

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
          <CategoryProductsList
            category={categoryProductsListData}
            categoryId={categoryProduct.category.key}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductTeaser;
