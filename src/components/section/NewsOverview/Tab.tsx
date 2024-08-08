import { useState } from "react";

interface TabProps {
  label: string;
}

const Tab = ({ label }: TabProps) => {
  const [active, setActive] = useState<boolean>(false);
  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <button
      type="button"
      className={`mx-6 rounded px-3 py-1 font-semibold text-text hover:bg-gray-100 ${active && "bg-gray-200 hover:bg-gray-300"}`}
      onClick={toggleActive}
    >
      {label}
    </button>
  );
};
export { Tab };
