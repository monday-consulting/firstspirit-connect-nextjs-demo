import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "@/components/page-body-count/Section";

const meta: Meta<typeof Section> = {
  title: "components/PageBodyContent/Section",
  component: Section,
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
      id: "exampleId",
      previewId: "exampleId.de_DE",
      sectionType: "smartliving.product_overview",
      type: "Section",
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
