import type { StoryObj } from "@storybook/react";
import { Stage } from "@/components/section/Stage";

const meta = {
  title: "components/Section/Stage",
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
    sectionId: "1234",
  },
};
