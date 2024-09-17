import { NewsTeaser } from "./NewsTeaser";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import type { NewsOverviewProps } from "./NewsOverview";

const CategoryTabs = ({ News }: NewsOverviewProps) => {
  //extract and create array of categories without duplicates
  const allCategories = new Array();
  News.map((item) => item.categories.map((category) => allCategories.push(category)));
  const categories = Array.from(new Set(allCategories));

  return (
    <TabGroup className="w-full">
      {/* Tabs */}
      <TabList className="text-center">
        <Tab className="mx-3 rounded px-3 py-1 font-semibold text-text focus-visible:outline-none data-[selected]:data-[hover]:bg-gray-300 data-[hover]:bg-gray-100 data-[selected]:bg-lightGray sm:w-full md:w-max">
          All Categories
        </Tab>
        {categories.map((category) => (
          <Tab
            key={category}
            className="mx-3 rounded px-3 py-1 font-semibold text-text focus-visible:outline-none data-[selected]:data-[hover]:bg-gray-300 data-[hover]:bg-gray-100 data-[selected]:bg-lightGray sm:w-full md:w-max"
          >
            {category}
          </Tab>
        ))}
      </TabList>
      {/* Tab panels inlcuding teasers filtered by category */}
      <TabPanels>
        <TabPanel className="mx-8 mt-5 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {News.map((item) => (
            <NewsTeaser key={item.headline} teaserData={item} />
          ))}
        </TabPanel>
        {categories.map((category) => {
          //creating an array of teasers matching each category
          const teasers = new Array();
          News.map((item) => {
            item.categories.includes(category) && teasers.push(item);
          });
          return (
            <TabPanel key={category} className="mx-8 mt-5 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
              {teasers.map((item) => (
                <NewsTeaser key={item.headline} teaserData={item} />
              ))}
            </TabPanel>
          );
        })}
      </TabPanels>
    </TabGroup>
  );
};
export { CategoryTabs };
