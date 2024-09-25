"use client";

import { useState, useMemo } from "react";
import type { NewsEntity } from "./NewsTeaser";
import { useWindowSize } from "@/utils/hooks/useWindowSize";
import { useTranslations } from "next-intl";
import { fuzzySearchObjects } from "@/utils/strings";
import { Search } from "./Search";
import { CategoryDropdown } from "./CategoryDropdown";
import { CategoryTabs } from "./CategoryTabs";

export type NewsFilterProps = {
  news: NewsEntity[];
  categories: string[];
};

const NewsFilter = ({ news, categories }: NewsFilterProps) => {
  const noFilterActiveCategory = categories[0];

  const t = useTranslations();
  const size = useWindowSize();

  const [selectedCategory, setSelectedCategory] = useState(noFilterActiveCategory);
  const [searchInput, setSearchInput] = useState("");

  const filteredNews = useMemo(() => {
    if (selectedCategory === noFilterActiveCategory && searchInput === "") {
      return news;
    }
    if (selectedCategory === noFilterActiveCategory && searchInput.length > 0) {
      return fuzzySearchObjects<NewsEntity>(searchInput, news, "headline");
    }
    if (selectedCategory !== noFilterActiveCategory && searchInput === "") {
      return news.filter((item) => item.categories.includes(selectedCategory));
    }
    if (selectedCategory !== noFilterActiveCategory && searchInput.length > 0) {
      return fuzzySearchObjects<NewsEntity>(
        searchInput,
        news.filter((item) => item.categories.includes(selectedCategory)),
        "headline"
      );
    }
  }, [selectedCategory, news, noFilterActiveCategory, searchInput]);

  return (
    <div>
      <Search input={searchInput} setInput={setSearchInput} />
      {(size?.width ?? 0) <= 640 ? (
        <CategoryDropdown
          filteredNews={filteredNews || []}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ) : (
        <CategoryTabs
          filteredNews={filteredNews || []}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
    </div>
  );
};

export { NewsFilter };
