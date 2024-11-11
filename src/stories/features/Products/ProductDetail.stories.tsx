import type { Meta, StoryObj } from "@storybook/react";
import { ProductDetail } from "@/components/features/Products/ProductDetail";
import { DefaultText } from "@/stories/mocks/textMocks";
import { DefaultImage } from "@/stories/mocks/imageMocks";

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
      categories: [{ data: { tt_name: "Test Category" } }],
      description: {
        content: [
          {
            content: DefaultText,
            data: "example",
            type: "paragraph",
          },
        ],
      },
      image: DefaultImage,
      name: "Stick Up Cam Security",
      price: "$100",
      teaserText: "Teaser text for Product 1",
    },
  },
};
