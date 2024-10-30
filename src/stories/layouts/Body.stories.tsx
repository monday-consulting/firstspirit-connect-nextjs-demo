import type { Meta, StoryObj } from "@storybook/react";
import { Body } from "@/components/layouts/Body";

const meta: Meta<typeof Body> = {
  title: "components/Layouts/Body",
  component: Body,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Create mock data for the story
const datasetExample = {
  type: "Dataset",
  id: "dataset-1",
  previewId: "preview-1",
  schema: "example-schema",
  entityType: "example-entity-type",
  template: "example-template",
  children: [],
  data: {},
  route: "example-route",
  routes: [],
  locale: "en-US",
};

const sectionExample = {
  type: "Section",
  id: "section-1",
  previewId: "preview-2",
  sectionType: "example-section",
  data: {},
  children: [],
};

const content2SectionExample = {
  type: "Content2Section",
  sectionType: "example-section",
  data: {
    schema: "example-schema",
    entityType: "example-entity-type",
    query: null,
    recordCountPerPage: 10,
    maxPageCount: 5,
    filterParams: {},
    ordering: [{ attribute: "example-attribute", ascending: true }],
  },
  children: [datasetExample],
};

const pageBodyExample = {
  type: "PageBody",
  name: "example-page-body",
  previewId: "preview-3",
  children: [datasetExample, sectionExample, content2SectionExample],
};

export const Default: Story = {
  args: {
    // pageBody: [pageBodyExample],
  },
};
