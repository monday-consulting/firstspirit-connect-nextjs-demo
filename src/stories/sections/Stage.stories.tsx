import { Stage } from "@/components/sections/Stage";
import type { StoryObj } from "@storybook/react";
import { defaultImage } from "../mocks/imageMocks";

const meta = {
  title: "components/Sections/Stage",
  component: Stage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: "Stage",
    subline: "This is a Stage component",
    image: defaultImage,
    cta: {
      label: "Learn more",
      href: "#",
    },
  },
};
