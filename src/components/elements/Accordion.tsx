import { cn } from "@/utils/cn";
import { type ReactNode, useState } from "react";
import { LuChevronDown } from "react-icons/lu";

export type AccordionProps = {
  title: string;
  content: ReactNode | string;
};

export const Accordion = ({ title, content }: AccordionProps) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full p-1">
      <div className="rounded-2xl border-2 border-text bg-white bg-opacity-60 px-8 py-7 shadow-10xl">
        <div className="flex cursor-pointer p-2 text-text">
          <button
            type="button"
            className="grow text-left font-semibold text-lg text-text leading-normal"
            onClick={toggle}
          >
            {title}
          </button>
          <button type="button" onClick={toggle}>
            <LuChevronDown
              size={25}
              className={cn("transition-transform duration-200", open && "rotate-180")}
            />
          </button>
        </div>
        <div
          className="max-h-0 w-auto overflow-hidden px-2 transition-[max-height] duration-200"
          style={open ? { maxHeight: "364px" } : {}}
        >
          {content}
        </div>
      </div>
    </div>
  );
};
