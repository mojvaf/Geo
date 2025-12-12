"use client";

import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function BirdMap({ coordinates }) {
  const latLngs = coordinates[0].map(([lng, lat]) => [lat, lng]);

  return (
    <MapContainer
      center={latLngs[0]}
      zoom={3}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Polygon positions={latLngs} />
    </MapContainer>
  );
}
