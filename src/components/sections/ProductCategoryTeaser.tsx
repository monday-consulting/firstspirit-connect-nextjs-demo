import type { Maybe } from "graphql/jsutils/Maybe";
import { useLocale } from "next-intl";
import type { FirstSpiritDataset } from "@/gql/generated/graphql";
import type { LinkData } from "@/types";
import { getProductDetailLink } from "@/utils/links";
import { getPreviewParams } from "@/utils/preview/getPreviewParams";
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
  previewId?: string;
};

const ProductCategoryTeaser = ({
  category,
  link,
  headline,
  text,
  teaserTextStart: teaserTextLeft = true,
  previewId,
}: ProductCategoryTeaserProps) => {
  const previewProps = getPreviewParams(previewId);
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
    <section className="bg-lightGray py-8" {...previewProps}>
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
