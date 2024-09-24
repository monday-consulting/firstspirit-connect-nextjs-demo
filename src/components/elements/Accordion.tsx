"use client";

import { cn } from "@/utils/cn";
import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import type { RichTextElementProps } from "./RichTextElement";
import { RichTextElement } from "./RichTextElement";

export type AccordionProps = {
  title: string;
  content: RichTextElementProps;
};

const Accordion = ({ title, content }: AccordionProps) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full p-1">
      <div className="rounded-xl border-2 border-text bg-white bg-opacity-60 px-4 py-4 shadow-10xl md:px-8 md:py-8">
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
          <RichTextElement {...content} />
        </div>
      </div>
    </div>
  );
};

export { Accordion };
