import type { Meta, StoryObj } from "@storybook/react";

import Content2Section from "@/components/page-body-count/Content2Section";

const meta: Meta<typeof Content2Section> = {
  title: "components/PageBodyContent/Content2Section",
  component: Content2Section,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    content: {
      sectionType: "t",
      type: "Content2Section",
      data: {
        entityType: "Header",
        filterParams: {
          Primary: true,
        },
        maxPageCount: 20,
        ordering: [
          {
            ascending: true,
            attribute: "asc",
          },
        ],
        query: "",
        recordCountPerPage: 0,
        schema: "",
      },
      children: [],
    },
  },
};
