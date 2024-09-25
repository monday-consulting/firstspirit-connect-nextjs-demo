import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import { type NewsEntity, NewsTeaser } from "./NewsTeaser";
import { useTranslations } from "next-intl";

export type CategoryDropdownProps = {
  filteredNews: NewsEntity[];
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (newCategory: string) => void;
};

const CategoryDropdown = ({
  filteredNews,
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryDropdownProps) => {
  const t = useTranslations();

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

export { CategoryDropdown };
