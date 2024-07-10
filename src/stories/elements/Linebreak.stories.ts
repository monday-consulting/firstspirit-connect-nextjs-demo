import type { Meta, StoryObj } from "@storybook/react";
import {Linebreak} from "@/components/elements/Linebreak";

const meta = {
  title: "components/Elements/Linebreak",
  component: Linebreak,
  tags: ["autodocs"],
} satisfies Meta<typeof Linebreak>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
