import type { Meta, StoryObj } from "@storybook/react";
import { Standard } from "./Standard.tsx";

const meta = {
  title: 'components/PageLayout/Standard',
  component: Standard,
  tags: ['autodocs'],
} satisfies Meta<typeof Standard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    path: 'Standard',
  }
}
