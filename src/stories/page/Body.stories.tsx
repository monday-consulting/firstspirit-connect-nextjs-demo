import type { Meta, StoryObj } from "@storybook/react";
import type { PageBody, Dataset, Section, Content2Section } from "fsxa-api";

import Body from "@/components/page/Body";

const meta: Meta<typeof Body> = {
    title: "components/Page/Body",
    component: Body,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Create mock data for the story
const datasetExample: Dataset = {
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

const sectionExample: Section = {
    type: "Section",
    id: "section-1",
    previewId: "preview-2",
    sectionType: "example-section",
    data: {},
    children: [],
};

const content2SectionExample: Content2Section = {
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

const pageBodyExample: PageBody = {
    type: "PageBody",
    name: "example-page-body",
    previewId: "preview-3",
    children: [datasetExample, sectionExample, content2SectionExample],
};

export const Primary: Story = {
    args: {
        pageBody: pageBodyExample,
    },
};
