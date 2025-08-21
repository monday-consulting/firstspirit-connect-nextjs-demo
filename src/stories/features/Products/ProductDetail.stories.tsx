import { ProductDetail } from "@/components/features/Products/ProductDetail";
import { defaultImage } from "@/stories/mocks/imageMocks";
import { defaultText } from "@/stories/mocks/textMocks";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProductDetail> = {
  title: "components/Features/Products/ProductDetail",
  component: ProductDetail,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: {
      id: "123",
      categories: [{ data: { ttName: "Test Category" } }],
      description: {
        content: [
          {
            content: defaultText,
            data: {},
            type: "paragraph",
          },
        ],
      },
      image: defaultImage,
      name: "Stick Up Cam Security",
      price: "$100",
      teaserText: "",
    },
  },
};
