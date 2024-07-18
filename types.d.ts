import type { RichTextElement } from "fsxa-api";

export interface AccordionItem {
  st_content: RichTextElement[];
  st_title: string;
}

export interface Accordion {
  st_accordion: [
    {
      data: AccordionItem;
      id: string;
      previewId: string;
    },
  ];
  st_headline: string;
  st_subline: string;
  st_info: RichTextElement[];
}
