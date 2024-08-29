import { Tab } from "@headlessui/react";

interface TabProps {
  label: string;
}

const NewsTab = ({ label }: TabProps) => {
  return (
    <Tab className="mx-3 rounded px-3 py-1 font-semibold text-text focus-visible:outline-none data-[selected]:data-[hover]:bg-gray-300 data-[hover]:bg-gray-100 data-[selected]:bg-gray-200">
      {label}
    </Tab>
  );
};
export { NewsTab };

//${active && "bg-gray-200 hover:bg-gray-300"}
