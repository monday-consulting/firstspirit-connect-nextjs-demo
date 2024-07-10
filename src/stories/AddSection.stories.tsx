import type { Meta, StoryObj } from "@storybook/react";
import AddSection from "@/components/AddSection";

const meta: Meta<typeof AddSection> = {
  title: "components/AddSection",
  component: AddSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    bodyName: "TestName",
  },
};
