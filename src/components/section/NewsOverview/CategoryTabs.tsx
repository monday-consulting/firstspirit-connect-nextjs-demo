import { TabGroup, Tab, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { type NewsEntity, NewsTeaser } from "./NewsTeaser";
import { useTranslations } from "next-intl";

export type CategoryTabsProps = {
  filteredNews: NewsEntity[];
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (newCategory: string) => void;
};

const CategoryTabs = ({
  filteredNews,
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryTabsProps) => {
  const t = useTranslations();

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

export { CategoryTabs };
