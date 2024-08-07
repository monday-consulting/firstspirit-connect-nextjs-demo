import type { Meta, StoryObj } from "@storybook/react";
import { Feature } from "@/components/elements/Feature";

const meta = {
  title: "components/Elements/Feature",
  component: Feature,
  tags: ["autodocs"],
} satisfies Meta<typeof Feature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    link: {
      href: "#",
      label: "Home",
    },
    image: {
      src: "https://placehold.co/600x400",
      alt: "Alt Text",
    },
    title: "Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula odio sed diam convallis laoreet. Maecenas porttitor lorem sit amet tempus pharetra.",
    id: "ID1",
  },
};
