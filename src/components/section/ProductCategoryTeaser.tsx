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

const ProductCategoryTeaser = ({ categoryProduct }: ProductCategoryTeaserProps) => {
  const textContent = categoryProduct.text.map((item) => item.content).join(" ");
  const productLink = getProductLink(categoryProduct);

  const categoryProductsListData = {
    data: categoryProduct.category.products,
  };

  return (
    <div className="bg-lightGray py-16">
      <div className="container mx-auto">
        <div className="m-auto">
          <Teaser
            headline={categoryProduct.headline}
            claim={categoryProduct.category.value}
            text={textContent}
            imageStart={false}
            cta={{ href: productLink, linkText: categoryProduct.category_link.linkText }}
            imageReplaceContent={
              <CategoryProductsList
                category={categoryProductsListData}
                categoryId={categoryProduct.category.key}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryTeaser;
