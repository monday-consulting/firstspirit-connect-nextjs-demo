import { NewsTeaser } from "./NewsTeaser";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { NewsTab } from "./NewsTab";
import type { NewsOverviewProps } from "./NewsOverview";

const CategoryTabs = ({ data }: NewsOverviewProps) => {
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
            <NewsTeaser
              key={item.headline}
              image={item.image}
              categories={item.categories}
              author={item.author}
              date={item.date}
              headline={item.headline}
              teaserText={item.teaserText}
              link={item.link}
            />
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
                <NewsTeaser
                  key={item.headline}
                  image={item.image}
                  categories={item.categories}
                  author={item.author}
                  date={item.date}
                  headline={item.headline}
                  teaserText={item.teaserText}
                  link={item.link}
                />
              ))}
            </TabPanel>
          );
        })}
      </TabPanels>
    </TabGroup>
  );
};
export { CategoryTabs };
