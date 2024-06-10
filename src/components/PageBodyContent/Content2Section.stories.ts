import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Content2Section } from "./Content2Section.tsx";

const meta = {
  title: 'components/PageBodyContent/Content2Section',
  component: Content2Section,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Content2Section',
  }
}
