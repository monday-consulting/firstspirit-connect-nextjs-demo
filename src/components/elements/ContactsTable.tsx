"use client";

import { fuzzySearchObjects } from "@/utils/strings";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { LuSearch } from "react-icons/lu";

export type Contact = {
  name: string;
  street: string;
  houseNumber: string;
  zipCode: string;
  city: string;
  country: string;
  email?: string;
  phone?: string;
};

export type ContactsTableProps = {
  contacts: Contact[];
};

const ContactsTable = ({ contacts }: ContactsTableProps) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>(contacts);

  const t = useTranslations();

  const filtered = useMemo(() => {
    if (searchInput !== "") {
      return fuzzySearchObjects(searchInput, contacts, "name");
    }
    return contacts;
  }, [searchInput, contacts]);

  useEffect(() => {
    setFilteredContacts(filtered);
  }, [filtered]);

  return (
    <div className="mb-6 rounded-xl bg-white p-4 shadow-lg sm:p-8">
      <div className="flex flex-col gap-4 bg-white pb-4 sm:flex-row sm:items-center sm:justify-between ">
        <h2 className="font-bold text-3xl text-text tracking-tight">{t("locations.searchInfo")}</h2>
        <div>
          <div className="relative mx-auto flex md:w-80">
            <LuSearch size={20} className="absolute top-3 left-3" />
            <input
              className="w-full rounded-lg border border-textLighter py-3 pr-4 pl-12 text-text leading-tight placeholder-text shadow-xsm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-2"
              type="text"
              placeholder={t("locations.searchPlaceholder")}
              id="search_locations"
              name="search_locations"
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </div>
      </div>
      <table className="w-full table-auto rounded-md bg-lightGray text-left font-medium text-sm ">
        <tbody>
          {filteredContacts.map((contact) => (
            <tr key={contact.name}>
              <td className="px-6 py-5">{contact.name}</td>
              <td className="py-5 pr-6">
                <p>
                  {contact.street} {contact.houseNumber}
                </p>
                <p>
                  {contact.zipCode} {contact.city}
                </p>
                <p>{contact.country}</p>
                {contact.phone && (
                  <p>
                    {t("locations.phone")}: {contact.phone}
                  </p>
                )}
                {contact.email && <p>E-Mail: {contact.email}</p>}
              </td>
              <td className="py-5 pr-6">
                <a
                  className="inline-block w-full rounded-md bg-secondary px-7 py-5 text-center font-medium text-base text-white leading-4 hover:brightness-90 md:text-lg"
                  href="https://www.google.com/maps/place/Crownpeak+Technology+GmbH/@51.5023768,7.5290053,15.94z/data=!4m5!3m4!1s0x47b916e7769275ab:0xef521cead5efe27d!8m2!3d51.5043505!4d7.5283671"
                >
                  {t("locations.getDirection")}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { ContactsTable };
