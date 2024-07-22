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

export const Default: Story = {
  args: {
    headline: "Häufig gestellte Fragen",
    entries: [
      {
        title: "Accordion one",
        content:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      },
      {
        title: "Accordion two",
        content:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      },
      {
        title: "Accordion three",
        content: (
          <p>
            This is <strong>HTML</strong>!
          </p>
        ),
      },
    ],
    claim: "Was Sie schon immer wissen wollten - Antworten auf die häufigsten Fragen",
  },
};
