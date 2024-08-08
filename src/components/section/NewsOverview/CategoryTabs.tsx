import { useState } from "react";
import type { NewsT } from "./NewsTeaser";
import { Tab } from "./Tab";

interface CategoryTabsProps {
  data: NewsT[];
}

const CategoryTabs = ({ data }: CategoryTabsProps) => {
  //extract categories from NewsData
  const allCategories = new Array();
  data.map((item) => item.categories.map((category) => allCategories.push(category)));
  const categories = Array.from(new Set(allCategories));

  const [active, setActive] = useState<boolean>(false);
  function toggleActive() {
    setActive(!active);
  }
  return (
    <div className="w-full">
      {categories.map((category) => (
        <Tab key={category} label={category} />
      ))}
    </div>
  );
};
export { CategoryTabs };
