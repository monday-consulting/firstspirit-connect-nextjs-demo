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
  street: "Breite Straße",
  houseNumber: "61",
  zipCode: "22767",
  city: "Hamburg",
  country: "Germany",
  email: "john.doe@example.com",
  phone: "123-456-7890",
};

const contact_2: Contact = {
  name: "Alec Winter",
  street: "Breite Straße",
  houseNumber: "61",
  zipCode: "22767",
  city: "Hamburg",
  country: "Germany",
  email: "alec.winterexample.com",
  phone: "017123423452",
};

const contact_3: Contact = {
  name: "Peter Pane",
  street: "Breite Straße",
  houseNumber: "61",
  zipCode: "22767",
  city: "Hamburg",
  country: "Germany",
  email: "peter-pane@example.com",
  phone: "123-456-7890",
};

const contact_4: Contact = {
  name: "Neil Armstrong",
  street: "Cliff Road",
  houseNumber: "90",
  zipCode: "22767",
  city: "Miami",
  country: "United Stated",
  email: "neil.armstrong@example.com",
  phone: "123-424312433",
};

const contact_5: Contact = {
  name: "Max Mustermann",
  street: "Musterstraße",
  houseNumber: "1",
  zipCode: "12345",
  city: "Musterstadt",
  country: "Musteria",
  email: "max-mustermann@example.com",
  phone: "0001112299-11",
};

export const Default: Story = {
  args: {
    contacts: [contact_1, contact_2, contact_3, contact_4, contact_5],
  },
};
