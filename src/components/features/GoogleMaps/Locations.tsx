import { GoogleMaps, type GoogleMapsProps } from "../../sections/GoogleMaps";
import { ContactsTable, type ContactsTableProps } from "./ContactsTable";

export type LocationsProps = {
  headline: string;
  mapInfo: GoogleMapsProps;
  subline?: string;
  contactInfo?: ContactsTableProps;
};

const Locations = ({ headline, subline, mapInfo, contactInfo }: LocationsProps) => {
  return (
    <section className="my-8 w-full">
      <h1 className="h1 mb-2 font-bold text-3xl text-primary">{headline}</h1>
      <p className="text-text">{subline}</p>
      <GoogleMaps {...mapInfo} className="my-4 shadow-xl" />
      {contactInfo?.contacts && <ContactsTable {...contactInfo} />}
    </section>
  );
};

export { Locations };
