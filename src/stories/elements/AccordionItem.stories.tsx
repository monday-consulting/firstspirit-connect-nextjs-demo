import type { Meta, StoryObj } from "@storybook/react";
import { AccordionItem } from "@/components/elements/AccordionItem";

const meta = {
  title: "components/Elements/AccordionItem",
  component: AccordionItem,
  tags: ["autodocs"],
} satisfies Meta<typeof AccordionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    data: {
      st_title: "AccordionItem",
    },
  },
};
