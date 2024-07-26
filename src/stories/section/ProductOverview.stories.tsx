import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ProductOverview from "@/components/section/ProductOverview";

const meta = {
    title: "components/Section/ProductOverview",
    component: ProductOverview,
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
                    description: "lorem ipsum...",
                    image: {
                        src: "https://placehold.co/600x400",
                        alt: "Alt Text",
                    },
                },
                {
                    headline: "Another Example",
                    description: "Another description...",
                    image: {
                        src: "https://placehold.co/600x400",
                        alt: "Another Alt Text",
                    },
                },
                {
                    headline: "Another Example",
                    description:
                        "Another descriptioher descriptioher descriptioher descriptioher descriptioher descriptioher descriptioher descriptioher descriptioher descriptioher descriptioher descriptioher descriptioher descriptioher descriptioher description...",
                    image: {
                        src: "https://placehold.co/600x400",
                        alt: "Another Alt Text",
                    },
                },
                {
                    headline: "Another Example",
                    description: "Another description...",
                    image: {
                        src: "https://placehold.co/600x400",
                        alt: "Another Alt Text",
                    },
                },
                {
                    headline: "Another Example",
                    description: "Another description...",
                    image: {
                        src: "https://placehold.co/600x400",
                        alt: "Another Alt Text",
                    },
                },
            ],
        },
    },
};
