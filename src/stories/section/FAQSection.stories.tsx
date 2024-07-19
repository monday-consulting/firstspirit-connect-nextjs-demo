import type { Meta, StoryObj } from "@storybook/react";
import FAQSection from "@/components/section/FAQSection";

const meta: Meta<typeof FAQSection> = {
  title: "components/Section/FAQSection",
  component: FAQSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      st_accordion: [
        {
          data: {
            st_content: [
              {
                type: "text",
                content: "Example text content",
                data: {},
              },
              {
                type: "paragraph",
                content: "Example paragraph content",
                data: {},
              },
            ],
            st_title: "Example Accordion 1",
          },
          id: "accordion-1",
          previewId: "preview-accordion-1",
        },
      ],
      st_headline: "Example Headline",
      st_info: [
        {
          type: "block",
          content: "Example block content",
          data: {},
        },
      ],
      st_subline: "Example Subline",
    },
  },
};
