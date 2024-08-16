"use client";

import { Teaser } from "./Teaser";
import type { RichTextElementProps } from "../elements/RichTextElement";
import { fetcher } from "@/utils/fetcher";
import { useLocale } from "use-intl";
import type { Dataset } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { Loading } from "../app-layout/Loading";
import { CategoryProductsList } from "./CategoryProductsList";

export type ProductFetch = {
  data: string;
  entityType: "product";
  fsId: string;
  route: string;
};

export type ProductCategoryTeaserProps = {
  category: {
    type: string;
    id: string;
    name: string;
    products?: Dataset[];
  };
  category_link: {
    href: string;
    linkText: string;
  };
  headline: string;
  text: RichTextElementProps;
  teaserTextStart?: boolean;
};

const ProductCategoryTeaser = ({
  category,
  category_link,
  headline,
  text,
  teaserTextStart: teaserTextLeft = true,
}: ProductCategoryTeaserProps) => {
  const locale = useLocale();

  const transformDataToProps = (products: Dataset[]) => {
    const filteredProducts = products
      .map((item) => ({
        ...item,
        data: JSON.parse(item.data),
      }))
      .filter((item) => {
        return item.data.tt_categories[0].id === category.id;
      });

    return filteredProducts.map((item) => ({
      name: item.data.tt_name,
      description: { content: item.data.tt_description },
      route: item.route,
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
            cta={{ href: category_link.href, label: category_link.linkText }}
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
