import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "@/components/app-layout/Navigation";
import { mockNavigationData } from "../mocks/mockNavigationData";

const meta = {
  title: "components/AppLayout/Navigation",
  component: Navigation,
  tags: ["autodocs"],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    navStructure: mockNavigationData,
  },
};
