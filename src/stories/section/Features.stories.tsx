import type { Meta, StoryObj } from "@storybook/react";
import { Features } from "@/components/section/Features";

const meta: Meta<typeof Features> = {
  title: "components/Section/Features",
  component: Features,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: "Headline",
    text: "Text",
    features: [
      {
        link: {
          href: "Home",
          linkText: "Home",
        },
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt Text",
        },
        title: "Title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui turpis, maximus non commodo ut, fringilla nec libero.",
        id: "ID1",
      },
      {
        link: {
          href: "Home",
          linkText: "Home",
        },
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt Text",
        },
        title: "Title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui turpis, maximus non commodo ut, fringilla nec libero.",
        id: "ID2",
      },
    ],
  },
};
