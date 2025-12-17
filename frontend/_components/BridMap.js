"use client";

import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function BirdMap({ features, seasons }) {
  const polygons = features.map((feature) =>
    feature.geometry.coordinates[0].map(([lng, lat]) => [lat, lng])
  );

  console.log(features);

  return (
    <MapContainer
      center={polygons[0][0]}
      zoom={3}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png"
        attribution="© Stadia Maps"
      />

      {polygons.map((poly, idx) => (
        <Polygon key={idx} positions={poly}>
          <Tooltip sticky>{seasons}</Tooltip>
        </Polygon>
      ))}
    </MapContainer>
  );
}
