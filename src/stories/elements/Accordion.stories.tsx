import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "@/components/elements/Accordion";

const meta = {
  title: "components/Elements/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      st_title: "Accordion",
    },
  },
};
