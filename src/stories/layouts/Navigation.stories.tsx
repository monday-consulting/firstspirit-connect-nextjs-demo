import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "@/components/layouts/Navigation";
import { mockNavigationData } from "../mocks/mockNavigationData";

const meta = {
  title: "components/Layouts/Navigation",
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
