import type { Meta, StoryObj } from "@storybook/react";
import { type Contact, ContactsTable } from "@/components/elements/ContactsTable";

const meta = {
  title: "components/Elements/ContactsTable",
  component: ContactsTable,
  tags: ["autodocs"],
} satisfies Meta<typeof ContactsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const contact_1: Contact = {
  name: "John Doe",
  description: { content: "Test" },
  coordinates: { lat: 50, lng: 10 },
};

const contact_2: Contact = {
  name: "Alec Winter",
  description: { content: "Test" },
  coordinates: { lat: 50, lng: 10 },
};

const contact_3: Contact = {
  name: "Peter Pane",
  description: { content: "Test" },
  coordinates: { lat: 50, lng: 10 },
};

const contact_4: Contact = {
  name: "Neil Armstrong",
  description: { content: "Test" },
  coordinates: { lat: 50, lng: 10 },
};

const contact_5: Contact = {
  name: "Max Mustermann",
  description: { content: "Test" },
  coordinates: { lat: 50, lng: 10 },
};

export const Default: Story = {
  args: {
    contacts: [contact_1, contact_2, contact_3, contact_4, contact_5],
  },
};
