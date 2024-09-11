import { Tab } from "@headlessui/react";

export type NewsTabProps = {
  label: string;
};

const NewsTab = ({ label }: NewsTabProps) => {
  return (
    <Tab className="mx-3 rounded px-3 py-1 font-semibold text-text focus-visible:outline-none data-[selected]:data-[hover]:bg-gray-300 data-[hover]:bg-gray-100 data-[selected]:bg-lightGray sm:w-full md:w-max">
      {label}
    </Tab>
  );
};
export { NewsTab };

//${active && "bg-gray-200 hover:bg-gray-300"}
