import type { Meta, StoryObj } from "@storybook/react";
import { CategoryTabs } from "@/components/section/NewsOverview/CategoryTabs";

const meta = {
  title: "components/section/NewsOverview/CategoryTabs",
  component: CategoryTabs,
  tags: ["autodocs"],
} satisfies Meta<typeof CategoryTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
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
    ],
  },
};
