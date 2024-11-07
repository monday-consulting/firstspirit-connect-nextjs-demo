import type { Meta, StoryObj } from "@storybook/react";
import { FAQSection } from "@/components/sections/FAQSection";
import { DefaultText, LongText } from "../mocks/textMocks";

const meta: Meta<typeof FAQSection> = {
  title: "components/Sections/FAQSection",
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
    headline: "Frequently Asked Questions",
    entries: [
      {
        title: "Accordion one",
        content: [
          {
            content: DefaultText,
            data: "",
            type: "",
          },
        ],
      },
      {
        title: "Accordion two",
        content: [
          {
            content: LongText,
            data: "",
            type: "",
          },
        ],
      },
    ],
    claim: "Your questions - Our answers",
    subline: (
      <p>
        Still have questions{" "}
        <a className="text-blue-700 underline" href="/">
          Contact us
        </a>
      </p>
    ),
  },
};
