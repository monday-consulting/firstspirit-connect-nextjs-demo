import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { RichTextElement } from "./RichTextElement.tsx";

const meta = {
  title: 'components/Elements/RichTextElement',
  component: RichTextElement,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'RichTextElement',
  }
}
