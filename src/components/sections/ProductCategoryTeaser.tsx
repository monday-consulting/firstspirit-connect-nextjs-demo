"use client";

import type { FirstSpiritSmartlivingProduct } from "@/gql/generated/graphql";
import type { LinkData } from "@/types";
import { fetcher } from "@/utils/fetcher";
import { getProductDetailLink } from "@/utils/links";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { Suspense } from "react";
import { CategoryProductsList } from "../features/ProductCategoryTeaser/CategoryProductsList";
import type { ProductTeaserProps } from "../features/ProductCategoryTeaser/ProductTeaser";
import type { RichTextElementProps } from "../globals/RichTextElement";
import { Loading } from "../layouts/Loading";
import { Teaser } from "./Teaser";

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
};

const ProductCategoryTeaser = ({
  category,
  link,
  headline,
  text,
  teaserTextStart: teaserTextLeft = true,
}: ProductCategoryTeaserProps) => {
  const locale = useLocale();

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
