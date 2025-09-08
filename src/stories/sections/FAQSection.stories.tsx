import type { Meta, StoryObj } from "@storybook/react";
import { FAQSection } from "@/components/sections/FAQSection";
import { Default as Accordion } from "./Accordion.stories";

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
    entries: [Accordion.args, Accordion.args, Accordion.args],
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
