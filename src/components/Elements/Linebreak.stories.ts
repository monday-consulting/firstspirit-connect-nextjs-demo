import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Linebreak } from "./Linebreak.tsx";

const meta = {
  title: 'components/Elements/Linebreak',
  components: Linebreak,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Linebreak',
  }
}
