import { GoogleMaps } from "@/components/elements/GoogleMaps";
import { getSectionByType } from "@/gql/documents/section";

const LocationsPage = async ({ params }: { params: { locale: string } }) => {
  const pageSection = await getSectionByType(params.locale, "google_maps");
  const data = JSON.parse(pageSection.data);

  const center = { lat: 40.7128, lng: -74.006 }; // New York City coordinates
  const markers = [
    { lat: 40.7128, lng: -74.006 }, // New York City
    { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    { lat: 41.8781, lng: -87.6298 }, // Chicago
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <GoogleMaps center={center} markers={markers} />
    </main>
  );
};

export default LocationsPage;
