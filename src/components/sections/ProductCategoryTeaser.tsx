"use client";

import { Teaser } from "./Teaser";
import type { RichTextElementProps } from "../globals/RichTextElement";
import { fetcher } from "@/utils/fetcher";
import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getProductDetailLink } from "@/utils/links";
import type { Locale } from "@/i18n/config";
import type { FirstSpiritSmartlivingProduct } from "@/gql/generated/graphql";
import { Suspense } from "react";
import { Loading } from "../layouts/Loading";
import { CategoryProductsList } from "../features/ProductCategoryTeaser/CategoryProductsList";
import type { ProductTeaserProps } from "../features/ProductCategoryTeaser/ProductTeaser";
import type { LinkData } from "@/types";
import { getPreviewParams } from "@/utils/preview/getPreviewParams";

export type ProductCategoryTeaserProps = {
  category: {
    type: string;
    id: string;
    name: string;
    products?: FirstSpiritSmartlivingProduct[];
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
  const locale = useLocale() as Locale;

  const transformDataToProps = (
    products: {
      data: FirstSpiritSmartlivingProduct;
      entityType: string;
      fsId: string;
      route: string;
    }[]
  ) => {
    const filteredProducts = products.filter((item) => {
      return item.data.ttCategories[0].id === category.id;
    });

    return filteredProducts.map(
      (item) =>
        ({
          name: item.data.ttName || "",
          description: { content: item.data.ttDescription },
          route: getProductDetailLink(item.fsId, locale),
          image: {
            src:
              item.data.ttImage?.__typename === "FirstSpiritImage"
                ? item.data.ttImage.resolutions?.original?.url
                : "",
            alt: item.data.ttImageAltText || "",
          },
        }) as ProductTeaserProps
    );
  };

  const { data: products, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetcher({ url: "/api/fetch", body: { locale, type: "product" } }),
    select: transformDataToProps,
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
              <Suspense fallback={<Loading />}>
                {products && !error && <CategoryProductsList products={products} />}
              </Suspense>
            }
          />
        </div>
      </div>
    </section>
  );
};

export { ProductCategoryTeaser };
