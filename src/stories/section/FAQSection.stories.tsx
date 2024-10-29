import type { Meta, StoryObj } from "@storybook/react";
import { FAQSection } from "@/components/section/FAQSection";

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
    headline: "Frequently Asked Questions",
    entries: [
      {
        title: "Accordion one",
        content: [
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar pellentesque semper. Nam vel auctor risus, in convallis nisl.",
            data: "",
            type: "",
          },
        ],
      },
      {
        title: "Accordion two",
        content: [
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar pellentesque semper. Nam vel auctor risus, in convallis nisl.",
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
