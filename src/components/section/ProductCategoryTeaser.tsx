"use client";

import { Teaser } from "./Teaser";
import type { RichTextElementProps } from "../elements/RichTextElement";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { useLocale } from "use-intl";
import { Suspense, useEffect, useState } from "react";
import type { ProductTeaserProps } from "../elements/ProductTeaser";
import { CategoryProductsList } from "./CategoryProductsList";
import { Loading } from "../app-layout/Loading";
import type { Dataset } from "@/types";

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
  // Content hydration
  const locale = useLocale();
  const [products, setProducts] = useState<ProductTeaserProps[] | undefined>(undefined);

  const { data: clientProducts, error } = useSWR<ProductFetch[]>("/api/fetch", (url: string) =>
    fetcher({ url, body: { type: "product", locale: locale } })
  );

  useEffect(() => {
    if (clientProducts && clientProducts.length > 0) {
      const filteredProducts = clientProducts
        .map((item) => ({
          ...item,
          data: JSON.parse(item.data),
        }))
        .filter((item) => {
          return item.data.tt_categories[0].id === category.id;
        });

      setProducts(
        filteredProducts.map((item) => ({
          name: item.data.tt_name,
          description: { content: item.data.tt_description },
          route: item.route,
          image: {
            src: item.data.tt_image.resolutions.ORIGINAL.url,
            alt: item.data.tt_image_alt_text,
          },
        }))
      );
    }
  }, [clientProducts, category.id]);

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
