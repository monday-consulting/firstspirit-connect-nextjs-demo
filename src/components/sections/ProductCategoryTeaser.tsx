import { useLocale } from "next-intl";
import type { FirstSpiritDataset, Maybe } from "@/lib/gql/generated/graphql";
import type { LinkData } from "@/types";
import { getProductDetailLink } from "@/utils/links";
import { CategoryProductsList } from "../features/ProductCategoryTeaser/CategoryProductsList";
import type { ProductTeaserProps } from "../features/ProductCategoryTeaser/ProductTeaser";
import type { RichTextElementProps } from "../globals/RichTextElement";
import { Teaser } from "./Teaser";

export type ProductCategoryTeaserProps = {
  category: {
    type: string;
    id: string;
    name: string;
    products?: Maybe<FirstSpiritDataset>[];
  };
  link: LinkData;
  headline: string;
  text: RichTextElementProps;
  teaserTextStart?: boolean;
};

const ProductCategoryTeaser = ({
  category,
  link,
  headline,
  text,
  teaserTextStart: teaserTextLeft = true,
}: ProductCategoryTeaserProps) => {
  const locale = useLocale();

  const products: ProductTeaserProps[] = (category.products ?? [])
    .filter((item) => item?.data?.__typename === "FirstSpiritSmartlivingProduct")
    .map((item) => {
      const product = item as FirstSpiritDataset & {
        data: { __typename: "FirstSpiritSmartlivingProduct" };
      };

      return {
        name: product.data.ttName ?? "",
        description: { content: product.data.ttDescription },
        route: getProductDetailLink(product.fsId, locale),
        image: {
          src:
            product.data.ttImage?.__typename === "FirstSpiritImage"
              ? (product.data.ttImage.resolutions?.original?.url ?? "")
              : "",
          alt: product.data.ttImageAltText ?? "",
        },
      };
    });

  return (
    <section className="bg-lightGray py-8">
      <div className="container mx-auto">
        <div className="m-auto">
          <Teaser
            headline={headline}
            claim={category.name}
            text={text}
            imageStart={teaserTextLeft}
            cta={link}
            breakpoint="xl"
            imageReplaceContent={
              products.length > 0 ? <CategoryProductsList products={products} /> : null
            }
          />
        </div>
      </div>
    </section>
  );
};

export { ProductCategoryTeaser };
