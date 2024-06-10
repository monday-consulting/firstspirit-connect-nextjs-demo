import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { AccordionItem } from "./AccordionItem.tsx";

const meta = {
  title: 'components/Elements/AccordionItem',
  component: AccordionItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'AccordionItem',
  }
}
