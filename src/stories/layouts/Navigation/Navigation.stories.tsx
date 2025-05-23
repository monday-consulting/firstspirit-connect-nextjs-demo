import { Navigation } from "@/components/layouts/Navigation/Navigation";
import type { Meta, StoryObj } from "@storybook/react";
import { mockNavigationData } from "../mockNavigationData";

const meta = {
  title: "components/Layouts/Navigation/Navigation",
  component: Navigation,
  tags: ["autodocs"],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navStructure: mockNavigationData,
  },
};
