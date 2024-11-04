import type { Meta, StoryObj } from "@storybook/react";
import { NewsTeaser } from "@/components/features/NewsOverview/NewsTeaser";

const meta = {
  title: "components/Features/NewsOverview/NewsTeaser",
  component: NewsTeaser,
  tags: ["autodocs"],
} satisfies Meta<typeof NewsTeaser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    newsEntity: {
      image: {
        src: "https://placehold.co/600x400",
        alt: "Alt Text",
      },
      categories: ["Smarthome", "Technology"],
      author: "John Doe",
      date: "December 9, 2022",
      headline: "Headline",
      teaserText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis molestie urna. Quisque laoreet nec nulla vitae ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis erat turpis, feugiat ac orci id, pellentesque pretium felis. Fusce ac dapibus tortor.",
    },
  },
};
