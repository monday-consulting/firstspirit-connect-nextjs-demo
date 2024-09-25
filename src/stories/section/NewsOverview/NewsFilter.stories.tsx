import type { Meta, StoryObj } from "@storybook/react";
import { NewsFilter } from "@/components/section/NewsOverview/NewsFilter";

const meta = {
  title: "components/section/NewsOverview/NewsFilter",
  component: NewsFilter,
  tags: ["autodocs"],
} satisfies Meta<typeof NewsFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

const news = [
  {
    image: {
      src: "https://placehold.co/600x400",
      alt: "Alt Text",
    },
    categories: ["Gadgets", "Smarthome"],
    author: "John Doe",
    date: "December 9, 2022",
    headline: "Headline 1",
    teaserText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis molestie urna. Quisque laoreet nec nulla vitae ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis erat turpis, feugiat ac orci id, pellentesque pretium felis. Fusce ac dapibus tortor.",
    link: "#",
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
    link: "#",
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
    link: "#",
  },
];

const categories = [
  "All Categories",
  ...Array.from(new Set(news.flatMap((item) => item.categories))),
];

export const Default: Story = {
  args: {
    news,
    categories,
  },
};
