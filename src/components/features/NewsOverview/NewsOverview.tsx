"use client";

import { useTranslations } from "next-intl";
import type { NewsEntity } from "./NewsTeaser";
import { NewsFilter } from "./NewsFilter";

export type NewsOverviewProps = {
  news: NewsEntity[];
};

const NewsOverview = ({ news }: NewsOverviewProps) => {
  const t = useTranslations();

  //extract and create array of categories without duplicates
  const categories = [
    t("news.allCategories"),
    ...Array.from(new Set(news.flatMap((item) => item.categories))),
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="mb-5 font-bold font-heading text-2xl text-primary">
          {t("news.newsOverview")}
        </h1>
        <p className="mb-7 text-text">{t("news.subHeadline")}</p>
      </div>
      <NewsFilter news={news} categories={categories} />
    </div>
  );
};
export { NewsOverview };
