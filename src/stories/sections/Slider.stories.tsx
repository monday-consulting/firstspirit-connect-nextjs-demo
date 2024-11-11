import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/components/sections/Slider";
import { DefaultImage, HugeImage } from "../mocks/imageMocks";

const meta = {
  title: "components/Sections/Slider",
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
          text: "Button1",
          link: "/",
        },
        description: "Description",
        image: DefaultImage,
        title: "Title1",
      },
      {
        button: {
          text: "Button2",
          link: "/",
        },
        description: "Description",
        image: HugeImage,
        title: "Title2",
      },
    ],
  },
};
