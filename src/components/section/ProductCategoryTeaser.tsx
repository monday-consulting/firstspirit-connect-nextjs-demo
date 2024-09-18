"use client";

import { Teaser } from "./Teaser";
import type { RichTextElementProps } from "../elements/RichTextElement";
import { fetcher } from "@/utils/fetcher";
import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { Loading } from "../app-layout/Loading";
import { CategoryProductsList } from "./CategoryProductsList";
import { getProductDetailLink, getProductGroupLink } from "@/utils/links";
import type { Locale } from "@/i18n/config";

// biome-ignore lint/suspicious/noExplicitAny: make typesafe
export type Product = { data: any; entityType: string; fsId: string; route: string };

export type ProductCategoryTeaserProps = {
  category: {
    type: string;
    id: string;
    name: string;
    products?: Product[];
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

  const transformDataToProps = (products: Product[]) => {
    const filteredProducts = products
      .map((item) => ({
        ...item,
        data: item.data,
      }))
      .filter((item) => {
        return item.data.tt_categories[0].id === category.id;
      });

    return filteredProducts.map((item) => ({
      name: item.data.tt_name,
      description: { content: item.data.tt_description },
      route: getProductDetailLink(item.fsId),
      image: {
        src: item.data.tt_image.resolutions.ORIGINAL.url,
        alt: item.data.tt_image_alt_text,
      },
    }));
  };

  const { data: products, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetcher({ url: "/api/fetch", body: { locale, type: "product" } }),
    select: transformDataToProps,
  });

  return (
    <div className="bg-lightGray py-16">
      <div className="container mx-auto">
        <div className="m-auto">
          <Teaser
            headline={headline}
            claim={category.name}
            text={text}
            imageStart={teaserTextLeft}
            cta={{ href: getProductGroupLink(category.name), label: group_link.label }}
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
