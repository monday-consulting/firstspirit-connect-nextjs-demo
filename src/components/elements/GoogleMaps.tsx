import { GoogleMapsEmbed } from "@next/third-parties/google";

export type GoogleMapsProps = {
  qArea: string;
  center?: string;
};
const GoogleMaps = ({ qArea = "germany", center }: GoogleMapsProps) => {
  return (
    <GoogleMapsEmbed
      apiKey={process.env.GOOGLE_MAPS_API_KEY || ""}
      height={400}
      width={800}
      mode="place"
      q={qArea}
      center={center}
    />
  );
};

export { GoogleMaps };
