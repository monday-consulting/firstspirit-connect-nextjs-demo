import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Dataset } from "./Dataset.tsx";

const meta = {
  title: 'components/PageBodyContent/Dataset',
  component: Dataset,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Dataset',
  }
}
