import { Teaser } from "./Teaser";
import { CategoryProductsList } from "./CategoryProductsList";
import type { RichTextElementProps } from "../elements/RichTextElement";
import type { Dataset } from "../elements/ProductTeaser";

export type ProductCategoryTeaserProps = {
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
  teaserTextStart?: boolean;
};

const ProductCategoryTeaser = ({
  category,
  category_link,
  headline,
  text,
  teaserTextStart: teaserTextLeft = true,
}: ProductCategoryTeaserProps) => {
  const textContent = text.map((item) => item.content).join(" ");

  const categoryProductsListData = {
    data: category.products,
  };

  return (
    <div className="bg-lightGray py-16">
      <div className="container mx-auto">
        <div className="m-auto">
          <Teaser
            headline={headline}
            claim={category.value}
            text={textContent}
            imageStart={teaserTextLeft}
            cta={{ href: category_link.href, label: category_link.linkText }}
            imageReplaceContent={
              <CategoryProductsList category={categoryProductsListData} categoryId={category.key} />
            }
          />
        </div>
      </div>
    </div>
  );
};

export { ProductCategoryTeaser };
