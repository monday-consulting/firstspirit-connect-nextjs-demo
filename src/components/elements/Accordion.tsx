// import type { AccordionItem } from "../../../types";
import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
interface AccordionProps {
  primary?: boolean;
  data: {
    st_title: string;
  };
}

export const Accordion = ({ primary = true, data }: AccordionProps) => {
  const mode = primary ? "storybook-accordion--primary" : "storybook-accordion--secondary";

  //TODO define data of type Accordion
  const [open, setOpen] = useState(false);
  const style = () => {
    return open ? { maxHeight: "364px" } : {};
  };
  const toggle = () => {
    console.log(open);
    setOpen(!open);
  };

  return (
    <>
      <div className="w-full p-1">
        <div className="rounded-2xl border-2 border-text bg-white bg-opacity-60 px-8 py-7 shadow-10xl">
          <div className="flex cursor-pointer p-2">
            <button
              type="button"
              className="grow text-left font-semibold text-lg text-text leading-normal"
              onClick={toggle}
            >
              {data.st_title}
            </button>
            <button type="button" onClick={toggle}>
              {open ? <LuChevronUp /> : <LuChevronDown />}
            </button>
          </div>
          <div
            className="max-h-0 w-auto overflow-hidden px-2 transition-[max-height] duration-200 ease-in-out"
            style={open ? { maxHeight: "364px" } : {}}
          >
            <p>{data.st_title}</p>
          </div>
        </div>
      </div>
    </>
  ); //TODO (above) insert ElementRichText instead of p tag
};
