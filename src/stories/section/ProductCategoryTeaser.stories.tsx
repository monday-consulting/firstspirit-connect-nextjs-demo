import type { Meta, StoryObj } from "@storybook/react";
import { type Product, ProductCategoryTeaser } from "@/components/section/ProductCategoryTeaser";

const meta: Meta<typeof ProductCategoryTeaser> = {
  title: "components/section/ProductCategoryTeaser",
  component: ProductCategoryTeaser,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockProducts: Product[] = [
  {
    entityType: "product",
    data: {
      categories: [],
      description: [
        {
          type: "paragraph",
          content: "Product 1 description",
          data: "someData",
        },
      ],
      image: {
        src: "https://placehold.co/600x400",
        alt: "Product 1 Image",
      },
      name: "Product 1",
      price: "$100",
      teaserText: "Teaser text for Product 1",
    },
    route: "product-1-route",
    fsId: "TestID",
  },
  {
    entityType: "product",
    data: {
      categories: [],
      description: [
        {
          type: "paragraph",
          content: "Product 1 description",
          data: "someData",
        },
      ],
      image: {
        src: "https://placehold.co/600x400",
        alt: "Product 1 Image",
      },
      name: "Product 1",
      price: "$100",
      teaserText: "Teaser text for Product 1",
    },
    route: "product-1-route",
    fsId: "TestID",
  },
  {
    entityType: "product",
    data: {
      categories: [],
      description: [
        {
          type: "paragraph",
          content: "Product 1 description",
          data: "someData",
        },
      ],
      image: {
        src: "https://placehold.co/600x400",
        alt: "Product 1 Image",
      },
      name: "Product 1",
      price: "$100",
      teaserText: "Teaser text for Product 1",
    },
    route: "product-1-route",
    fsId: "TestID",
  },
  {
    entityType: "product",
    data: {
      categories: [],
      description: [
        {
          type: "paragraph",
          content: "Product 1 description",
          data: "someData",
        },
      ],
      image: {
        src: "https://placehold.co/600x400",
        alt: "Product 1 Image",
      },
      name: "Product 1",
      price: "$100",
      teaserText: "Teaser text for Product 1",
    },
    route: "product-1-route",
    fsId: "TestID",
  },
];

export const Default: Story = {
  args: {
    category: {
      type: "category",
      id: "category-key",
      name: "Category Name",
      products: mockProducts,
    },
    group_link: {
      label: "View More",
    },
    headline: "Product Teaser Headline",
    text: {
      content:
        "sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu",
    },
    teaserTextStart: true,
  },
};
