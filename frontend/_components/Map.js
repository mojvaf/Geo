"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import L from "leaflet";
import { fetchCities } from "../store/adventuresSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

// Fix Leaflet marker icons in Next.js
const customIcon = new L.Icon({
  iconUrl: "/icons/adventure.png",
  iconRetinaUrl: "/icons/adventure.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function Map() {
  const [mapPosition, setMapPosition] = useState([43.656745, -79.488281]);

  const router = useRouter();
  const dispatch = useDispatch();
  const adventures = useSelector((state) => state.adventures.features);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <div
      className="flex-1 h-full relative"
      onClick={() => router.push("/adventure/form")}
    >
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        <Marker position={mapPosition} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
