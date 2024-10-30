import type { StoryObj } from "@storybook/react";
import { Stage } from "@/components/sections/Stage";

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
    image: {
      src: "https://via.placeholder.com/1080",
      alt: "placeholder",
    },
    cta: {
      label: "CTA",
      href: "#",
    },
  },
};
