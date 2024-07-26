import type { Meta, StoryObj } from "@storybook/react";
import ProductTeaser from "@/components/section/ProductTeaser";

const meta: Meta<typeof ProductTeaser> = {
  title: "components/section/ProductTeaser",
  component: ProductTeaser,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    category: {
      key: "Doorbell",
      type: "idk",
      value: "test",
      products: [
        {
          headline: "Doorbell Example",
          description:
            "lorem  eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctusipsum...",
          image: {
            src: "https://placehold.co/600x400",
            alt: "Alt Text",
          },
        },
        {
          headline: "Another Example",
          description: "Another lorem...",
          image: {
            src: "https://placehold.co/600x400",
            alt: "Another Alt Text",
          },
        },
        {
          headline: "Doorbell Example",
          description: "lorem ipsum...",
          image: {
            src: "https://placehold.co/600x400",
            alt: "Alt Text",
          },
        },
        {
          headline: "Another Example",
          description:
            "ed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut lab...",
          image: {
            src: "https://placehold.co/600x400",
            alt: "Another Alt Text",
          },
        },
      ],
    },
    category_link: {
      href: "exampleUrl.com",
      linkText: "Explore all door locks",
    },
    text: [
      {
        content:
          "ed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, ",
        data: "example",
        type: "paragraph",
      },
    ],
    headline: "Smart Door Locks",
  },
};
