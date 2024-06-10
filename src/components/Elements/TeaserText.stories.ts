import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TeaserText } from "./TeaserText.tsx";

const meta = {
  title: 'components/Elements/TeaserText',
  component: TeaserText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'TeaserText',
  }
}
