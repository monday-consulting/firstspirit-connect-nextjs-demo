import type { Meta, StoryObj } from "@storybook/react";
import { NewsOverview } from "@/components/sections/NewsOverview";

const meta = {
  title: "components/Sections/NewsOverview",
  component: NewsOverview,
  tags: ["autodocs"],
} satisfies Meta<typeof NewsOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    news: [
      {
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt Text",
        },
        categories: ["Smarthome", "Gadgets"],
        author: "John Doe",
        date: "December 9, 2022",
        headline: "Headline 1",
        teaserText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis molestie urna. Quisque laoreet nec nulla vitae ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis erat turpis, feugiat ac orci id, pellentesque pretium felis. Fusce ac dapibus tortor.",
      },
      {
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt Text",
        },
        categories: ["Smarthome", "Technology"],
        author: "John Doe",
        date: "December 9, 2022",
        headline: "Headline 2",
        teaserText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis molestie urna. Quisque laoreet nec nulla vitae ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis erat turpis, feugiat ac orci id, pellentesque pretium felis. Fusce ac dapibus tortor.",
      },
      {
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt Text",
        },
        categories: ["Green Tech", "Technology"],
        author: "John Doe",
        date: "December 9, 2022",
        headline: "Headline 3",
        teaserText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis molestie urna. Quisque laoreet nec nulla vitae ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis erat turpis, feugiat ac orci id, pellentesque pretium felis. Fusce ac dapibus tortor.",
      },
    ],
  },
};
