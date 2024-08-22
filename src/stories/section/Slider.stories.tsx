import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/components/section/Slider";

const meta = {
  title: "components/Section/Slider",
  component: Slider,
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slides: [
      {
        button: {
          lt_button_text: "Button1",
          lt_product_link: { route: "Route1" },
          lt_internal: { referenceId: "Button1" },
        },
        description: "Description",
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt Text",
        },
        title: "Title1",
      },
      {
        button: {
          lt_button_text: "Button2",
          lt_product_link: { route: "Route2" },
          lt_internal: { referenceId: "Button2" },
        },
        description: "Description",
        image: {
          src: "http://placehold.co/600x400",
          alt: "Alt Text",
        },
        title: "Title2",
      },
    ],
  },
};
