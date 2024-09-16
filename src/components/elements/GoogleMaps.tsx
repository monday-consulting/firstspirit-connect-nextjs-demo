"use client";

import { APIProvider, Map as GoogleMap, Marker } from "@vis.gl/react-google-maps";

export type GoogleMapsProps = {
  center: google.maps.LatLngLiteral;
  markers: google.maps.LatLngLiteral[];
};

const GoogleMaps = ({ center, markers }: GoogleMapsProps) => {
  return (
    <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY || ""}>
      <GoogleMap
        style={{ width: "80vw", height: "400px" }}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </GoogleMap>
    </APIProvider>
  );
};

export { GoogleMaps };
