import type { Meta, StoryObj } from "@storybook/react";
import { FeatureSection } from "@/components/section/FeatureSection";

const meta: Meta<typeof FeatureSection> = {
  title: "components/Section/FeatureSection",
  component: FeatureSection,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: "Headline",
    text: "Test",
    features: [
      {
        link: {
          href: "#",
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
          href: "#",
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
