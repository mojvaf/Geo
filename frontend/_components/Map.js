"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import L from "leaflet";
import adventureIconUrl from "../public/icons/adventure.png"; 

function Map() {
  const [adventures, setAdventures] = useState({ features: [] });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/adventures/")
      .then((res) => res.json())
      .then((data) => setAdventures(data));
  }, []);

  const center = adventures.features.length
    ? [
        adventures.features[0].geometry.coordinates[1],
        adventures.features[0].geometry.coordinates[0],
      ]
    : [51.505, -0.09];

  const AdventureIcon = L.icon({
    iconUrl: adventureIconUrl.src,
    iconSize: [35, 45],
    iconAnchor: [17, 45],
    popupAnchor: [0, -45],
  });

  return (
    <MapContainer
      center={center}
      zoom={5}
      scrollWheelZoom={false}
      className="flex-1 w-full h-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {adventures.features.map((feature) => (
        <Marker
          key={feature.id}
          position={[
            feature.geometry.coordinates[1],
            feature.geometry.coordinates[0],
          ]}
          icon={AdventureIcon}
        >
          <Popup>
            <strong>{feature.properties.cityName}</strong> <br />
            {feature.properties.country} <br />
            {feature.properties.date}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
