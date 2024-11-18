import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/components/sections/Slider";
import { defaultImage, smallImage } from "../mocks/imageMocks";
import { defaultText } from "../mocks/textMocks";

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
        image: defaultImage,
        title: "Title1",
      },
      {
        button: {
          text: "Button2",
          link: "/",
        },
        description: defaultText,
        image: smallImage,
        title: "Title2",
      },
    ],
  },
};
