"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSearchParams } from "next/navigation";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";
import { fetchCities } from "../store/adventuresSlice";
import { useDispatch, useSelector } from "react-redux";

function Map() {
  const dispatch = useDispatch();
  const adventures = useSelector((state) => state.adventures.features);
  // const searchParams = useSearchParams()
  // const lat = searchParams.get('lat')
  // const lng = searchParams.get('lng')

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const center = adventures.length
    ? [
        adventures[0].geometry.coordinates[1],
        adventures[0].geometry.coordinates[0],
      ]
    : [51.505, -0.09];

  const AdventureIcon = L.icon({
    iconUrl: "/icons/adventure.png",
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

      {adventures.map((feature) => (
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
