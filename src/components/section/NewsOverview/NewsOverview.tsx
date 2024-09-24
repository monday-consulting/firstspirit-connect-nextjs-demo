"use client";

import { useTranslations } from "next-intl";
import { CategoryDropdown } from "./CategoryDropdown";
import { CategoryTabs } from "./CategoryTabs";
import type { NewsEntity } from "./NewsTeaser";
import { Search } from "./Search";
import { useWindowSize } from "@/utils/hooks/useWindowSize";

export type NewsOverviewProps = {
  news: NewsEntity[];
};

const NewsOverview = ({ news }: NewsOverviewProps) => {
  const size = useWindowSize();
  const t = useTranslations();

  //extract and create array of categories without duplicates
  const categories = [
    "All Categories",
    ...Array.from(new Set(news.flatMap((item) => item.categories))),
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="mb-5 font-bold font-heading text-2xl text-primary">
          {t("news.newsOverview")}
        </h1>
        <p className="mb-7 text-text">{t("news.subHeadline")}</p>
        <Search className="m-auto mb-10 block sm:w-full md:w-1/3" />
      </div>
      {(size?.width ?? 0) <= 640 ? (
        <CategoryDropdown news={news} categories={categories} />
      ) : (
        <CategoryTabs news={news} categories={categories} />
      )}
    </div>
  );
};
export { NewsOverview };
