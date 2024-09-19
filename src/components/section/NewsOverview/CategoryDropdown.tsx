import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa6";
import type { NewsOverviewProps } from "./NewsOverview";
import { NewsTeaser } from "./NewsTeaser";

const CategoryDropdown = ({ News }: NewsOverviewProps) => {
  //extract and create array of categories without duplicates
  const allCategories = new Array();
  News.map((item) => item.categories.map((category) => allCategories.push(category)));
  const categories = Array.from(new Set(allCategories));
  //create array of categories without duplicates and add option "All Categories" without type conflicts
  const tabs = ["All Categories"];
  categories.map((item) => tabs.push(item));

  const [selectedCategory, setSelectedCategory] = useState(tabs[0]);

  const teasers = new Array();
  News.map((item) => item.categories.includes(selectedCategory) && teasers.push(item));

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
            {tabs.map((tab) => (
              <ListboxOption
                key={tab}
                value={tab}
                className="group my-1 cursor-default rounded px-5 font-medium text-text leading-10 data-[focus]:bg-lightGray"
              >
                <FaCheck className="invisible mr-1 inline group-data-[selected]:visible" />
                {tab}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>
      <div className="mx-8 mt-5 grid grid-cols-1 gap-8">
        {selectedCategory === "All Categories"
          ? News.map((item) => <NewsTeaser key={item.headline} teaserData={item} />)
          : teasers.map((item) => <NewsTeaser key={item.headline} teaserData={item} />)}
      </div>
    </div>
  );
};
export { CategoryDropdown };
