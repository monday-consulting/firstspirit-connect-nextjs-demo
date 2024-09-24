"use client";

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useEffect, useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa6";
import { type NewsEntity, NewsTeaser } from "./NewsTeaser";

export type CategoryDropdownProps = {
  news: NewsEntity[];
  categories: string[];
};

const CategoryDropdown = ({ news, categories }: CategoryDropdownProps) => {
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
    <div>
      <div className="text-center">
        <Listbox value={selectedCategory} onChange={setSelectedCategory}>
          <ListboxButton className="mb-5 w-full rounded bg-gray-100 font-semibold text-text leading-10 focus-visible:outline-none data-[hover]:bg-lightGray">
            {selectedCategory}
            <FaChevronDown className="float-right mt-3 mr-3 inline" />
          </ListboxButton>
          <ListboxOptions
            anchor="bottom"
            className="mx-auto mt-1 w-1/2 rounded-lg bg-gray-100 px-1"
          >
            {categories.map((item) => (
              <ListboxOption
                key={item}
                value={item}
                className="group my-1 cursor-default rounded px-5 font-medium text-text leading-10 data-[focus]:bg-lightGray"
              >
                <FaCheck className="invisible mr-1 inline group-data-[selected]:visible" />
                {item}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>
      <div className="mx-8 mt-5 grid grid-cols-1 gap-8">
        {filteredNews.map((newsEntity) => (
          <NewsTeaser key={newsEntity.headline} newsEntity={newsEntity} />
        ))}
      </div>
    </div>
  );
};
export { CategoryDropdown };
