"use client";

import { useState, useEffect } from "react";
import { type NewsEntity, NewsTeaser } from "./NewsTeaser";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export type CategoryTabsProps = {
  news: NewsEntity[];
  categories: string[];
};

const CategoryTabs = ({ news, categories }: CategoryTabsProps) => {
  const noFilterActiveCategory = categories[0];

  const [selectedCategory, setSelectedCategory] = useState(noFilterActiveCategory);
  const [filteredNews, setFilteredNews] = useState(news);

  useEffect(() => {
    if (selectedCategory === noFilterActiveCategory) {
      setFilteredNews(news);
    } else {
      setFilteredNews(news.filter((item) => item.categories.includes(selectedCategory)));
    }
  }, [selectedCategory, news, noFilterActiveCategory]);

  return (
    <TabGroup className="w-full">
      <TabList className="text-center">
        {categories.map((category) => (
          <Tab
            key={category}
            className="mx-3 w-max rounded px-3 py-1 font-semibold text-text focus-visible:outline-none data-[selected]:data-[hover]:bg-gray-300 data-[hover]:bg-gray-100 data-[selected]:bg-lightGray"
            onClick={() => setSelectedCategory(category)} // Set selected category on click
          >
            {category}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {categories.map((category) => (
          <TabPanel key={category} className="mx-8 mt-5 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {filteredNews.map((item) => (
              <NewsTeaser key={item.headline} newsEntity={item} />
            ))}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export { CategoryTabs };
