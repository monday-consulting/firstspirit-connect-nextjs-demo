import type { Meta, StoryObj } from "@storybook/react";
import ImageComponent from "@/components/elements/Image";

const meta = {
  title: "components/Elements/Image",
  component: ImageComponent,
  tags: ["autodocs"],
  argTypes: {
    ratio: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof ImageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    image: {
      description: "A sample image",
      resolutions: {
        small: {
          fileSize: 2048,
          extension: "jpg",
          mimeType: "image/jpeg",
          width: 320,
          height: 240,
          url: "https://via.placeholder.com/320x240",
        },
        medium: {
          fileSize: 4096,
          extension: "jpg",
          mimeType: "image/jpeg",
          width: 640,
          height: 480,
          url: "https://via.placeholder.com/640x480",
        },
        large: {
          fileSize: 8192,
          extension: "jpg",
          mimeType: "image/jpeg",
          width: 1280,
          height: 960,
          url: "https://via.placeholder.com/1280x960",
        },
      },
      type: "Image",
      id: "",
      previewId: "",
      meta: {},
    },
    ratio: "medium",
    alt: "Sample Image",
  },
};

export const WithoutImage: Story = {
  args: {
    image: {
      description: "A sample image",
      resolutions: {
        small: {
          fileSize: 2048,
          extension: "jpg",
          mimeType: "image/jpeg",
          width: 320,
          height: 240,
          url: "",
        },
        medium: {
          fileSize: 4096,
          extension: "jpg",
          mimeType: "image/jpeg",
          width: 640,
          height: 480,
          url: "",
        },
        large: {
          fileSize: 8192,
          extension: "jpg",
          mimeType: "image/jpeg",
          width: 1280,
          height: 960,
          url: "",
        },
      },
      type: "Image",
      id: "",
      previewId: "",
      meta: {},
    },
    ratio: "small",
    alt: "dwaadwadSample Image",
  },
};
