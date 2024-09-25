"use client";

import { useState, useMemo } from "react";
import { type NewsEntity, NewsTeaser } from "./NewsTeaser";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { useWindowSize } from "@/utils/hooks/useWindowSize";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { fuzzySearchObjects } from "@/utils/strings";
import { Search } from "./Search";

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

  const CategoryDropdown = () => {
    return (
      <>
        <div className="text-center">
          <Listbox value={selectedCategory} onChange={setSelectedCategory}>
            <ListboxButton
              className={
                "mb-6 w-full rounded bg-lightGray font-semibold text-text leading-10 focus-visible:outline-none data-[hover]:bg-gray"
              }
            >
              {selectedCategory}
              <FaChevronDown className="float-right mt-3 mr-3 inline" />
            </ListboxButton>
            <ListboxOptions
              anchor="bottom"
              className="mx-auto mt-1 w-1/2 rounded-lg bg-lightGray px-1"
            >
              {categories.map((item) => (
                <ListboxOption
                  key={item}
                  value={item}
                  className="group my-1 cursor-pointer rounded px-5 font-medium text-text leading-10 data-[focus]:bg-gray"
                >
                  <FaCheck className="invisible mr-1 inline group-data-[selected]:visible" />
                  {item}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
        </div>
        <div className="mx-8 mt-5 grid grid-cols-1 gap-8">
          {filteredNews && filteredNews.length > 0 ? (
            <>
              {filteredNews.map((newsEntity) => (
                <NewsTeaser key={newsEntity.headline} newsEntity={newsEntity} />
              ))}
            </>
          ) : (
            <h4 className="text-center font-bold text-2xl text-text">{t("news.noResults")}</h4>
          )}
        </div>
      </>
    );
  };

  const CategoryTabs = () => {
    return (
      <TabGroup
        selectedIndex={categories.indexOf(selectedCategory)}
        onChange={(index) => setSelectedCategory(categories[index])}
        className="w-full"
      >
        <TabList className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Tab
              key={category}
              className="mb-6 w-max rounded px-3 py-1 font-semibold text-text focus-visible:outline-none data-[selected]:data-[hover]:bg-gray data-[hover]:bg-lightGray data-[selected]:bg-lightGray"
            >
              {category}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {categories.map(
            (category) =>
              filteredNews &&
              filteredNews.length > 0 && (
                <TabPanel
                  key={category}
                  className="mx-8 mt-5 grid gap-8 sm:grid-cols-1 md:grid-cols-2"
                >
                  {filteredNews.map((item) => (
                    <NewsTeaser key={item.headline} newsEntity={item} />
                  ))}
                </TabPanel>
              )
          )}
          {filteredNews && filteredNews.length < 1 && (
            <h4 className="text-center font-bold text-2xl text-text">{t("news.noResults")}</h4>
          )}
        </TabPanels>
      </TabGroup>
    );
  };

  return (
    <div>
      <Search input={searchInput} setInput={setSearchInput} />
      {(size?.width ?? 0) <= 640 ? <CategoryDropdown /> : <CategoryTabs />}
    </div>
  );
};

export { NewsFilter };
