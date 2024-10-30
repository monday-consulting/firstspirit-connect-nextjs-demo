"use client";

import { cn } from "@/utils/cn";
import { APIProvider, Map as GoogleMap, Marker } from "@vis.gl/react-google-maps";

export type GoogleMapsProps = {
  center: google.maps.LatLngLiteral;
  markers: google.maps.LatLngLiteral[];
  zoom?: number;
  disableUi?: boolean;
  className?: string;
};

const GoogleMaps = ({
  center,
  markers,
  zoom = 5,
  disableUi = false,
  className,
}: GoogleMapsProps) => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <GoogleMap
        className={cn("h-[400px] w-full overflow-hidden rounded-xl shadow-lg", className)}
        defaultCenter={center}
        defaultZoom={zoom}
        gestureHandling={"greedy"}
        disableDefaultUI={disableUi}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </GoogleMap>
    </APIProvider>
  );
};

export { GoogleMaps };
