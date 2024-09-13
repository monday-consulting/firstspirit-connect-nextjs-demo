import { GoogleMaps } from "@/components/elements/GoogleMaps";
import { getSectionByType } from "@/gql/documents/section";

const LocationsPage = async ({ params }: { params: { locale: string } }) => {
  const pageSection = await getSectionByType(params.locale, "google_maps");
  const data = JSON.parse(pageSection.data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <GoogleMaps qArea="Germany" />
    </main>
  );
};

export default LocationsPage;
