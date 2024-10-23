"use client";

import { Teaser } from "./Teaser";
import type { RichTextElementProps } from "../elements/RichTextElement";
import { fetcher } from "@/utils/fetcher";
import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getProductDetailLink, getProductGroupLink } from "@/utils/links";
import type { Locale } from "@/i18n/config";
import type { FirstSpiritSmartlivingProduct } from "@/gql/generated/graphql";
import { Suspense } from "react";
import { Loading } from "../app-layout/Loading";
import { CategoryProductsList } from "./CategoryProductsList";
import type { ProductTeaserProps } from "../elements/ProductTeaser";

export type ProductCategoryTeaserProps = {
  category: {
    type: string;
    id: string;
    name: string;
    products?: FirstSpiritSmartlivingProduct[];
  };
  group_link: {
    label: string;
  };
  headline: string;
  text: RichTextElementProps;
  teaserTextStart?: boolean;
};

const ProductCategoryTeaser = ({
  category,
  group_link,
  headline,
  text,
  teaserTextStart: teaserTextLeft = true,
}: ProductCategoryTeaserProps) => {
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
    <div className="bg-lightGray py-8">
      <div className="container mx-auto">
        <div className="m-auto">
          <Teaser
            headline={headline}
            claim={category.name}
            text={text}
            imageStart={teaserTextLeft}
            cta={{ href: getProductGroupLink(category.name), label: `${group_link.label}Todo` }}
            breakpoint="xl"
            imageReplaceContent={
              <Suspense fallback={<Loading />}>
                {products && !error && <CategoryProductsList products={products} />}
              </Suspense>
            }
          />
        </div>
      </div>
    </div>
  );
};

export { ProductCategoryTeaser };
