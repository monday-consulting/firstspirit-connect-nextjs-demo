"use client";

import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import type { RichTextElementContent } from "../globals/RichTextElement";
import { RichTextElement } from "../globals/RichTextElement";

export type AccordionProps = {
  title: string;
  content: RichTextElementContent[];
};

const Accordion = ({ title, content }: AccordionProps) => {
  const t = useTranslations();

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full p-1" data-preview-id="#st_accordion">
      <div className="rounded-xl border-2 border-text bg-white bg-opacity-60 px-4 py-4 shadow-10xl md:px-8 md:py-8">
        <div className="flex cursor-pointer p-2 text-text">
          <button
            type="button"
            className="grow text-left font-semibold text-lg text-text leading-normal"
            onClick={toggle}
          >
            {title}
          </button>
          <button
            type="button"
            name={open ? t("buttons.closeAccordion") : t("buttons.openAccordion")}
            onClick={toggle}
          >
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
          <RichTextElement content={content} />
        </div>
      </div>
    </div>
  );
};

export { Accordion };
