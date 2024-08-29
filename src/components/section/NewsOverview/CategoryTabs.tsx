import { NewsTeaser, type NewsT } from "./NewsTeaser";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { NewsTab } from "./NewsTab";

interface CategoryTabsProps {
  data: NewsT[];
}

const CategoryTabs = ({ data }: CategoryTabsProps) => {
  //extract and create array of categories without duplicates
  const allCategories = new Array();
  data.map((item) => item.categories.map((category) => allCategories.push(category)));
  const categories = Array.from(new Set(allCategories));

  return (
    <TabGroup className="w-full">
      {/* Tabs */}
      <TabList className="text-center">
        <NewsTab label="All Categories" />
        {categories.map((category) => (
          <NewsTab key={category} label={category} />
        ))}
      </TabList>
      {/* Tab panels inlcuding teasers filtered by category */}
      <TabPanels>
        <TabPanel className="mx-8 mt-5 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {data.map((item) => (
            <NewsTeaser key={item.headline} data={item} />
          ))}
        </TabPanel>
        {categories.map((category) => {
          //creating an array of teasers matching each category
          const teasers = new Array();
          data.map((item) => {
            item.categories.includes(category) && teasers.push(item);
          });
          return (
            <TabPanel key={category} className="mx-8 mt-5 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
              {teasers.map((item) => (
                <NewsTeaser key={item.headline} data={item} />
              ))}
            </TabPanel>
          );
        })}
      </TabPanels>
    </TabGroup>
  );
};
export { CategoryTabs };
