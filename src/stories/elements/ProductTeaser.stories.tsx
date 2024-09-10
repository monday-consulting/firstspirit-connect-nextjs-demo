import type { Meta, StoryObj } from "@storybook/react";
import { ProductTeaser } from "@/components/elements/ProductTeaser";

const meta: Meta<typeof ProductTeaser> = {
  title: "components/Elements/ProductTeaser",
  component: ProductTeaser,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProductTeaser>;

export const Default: Story = {
  args: {
    name: "Test Teaser",
    description: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    image: {
      src: "https://placehold.co/600x400",
      alt: "Alt text",
    },
    route: "#",
  },
};
