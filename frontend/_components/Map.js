"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import L from "leaflet";
import { useMapEvents } from "react-leaflet";
import { fetchCities } from "../store/adventuresSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";

// Fix Leaflet marker icons
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

  const searchParams = useSearchParams();
  const lat = parseFloat(searchParams.get("lat"));
  const lng = parseFloat(searchParams.get("lng"));

  const router = useRouter();
  const dispatch = useDispatch();
  const adventures = useSelector((state) => state.adventures.features);

  // Load cities
  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  // If lat/lng from URL → center map
  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lat, lng]);

  return (
    <div className="flex-1 h-full relative">
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {adventures.map((city) => (
          <Marker
            key={city.properties.cityName}
            position={[
              city.geometry.coordinates[1],
              city.geometry.coordinates[0],
            ]}
            icon={customIcon}
          >
            <Popup>{city.properties.cityName}</Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

// CENTER MAP PROGRAMMATICALLY
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

// DETECT CLICK ON MAP
function DetectClick() {
  const router = useRouter();

  useMapEvents({
    click(e) {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;
      router.push(`/adventure/form?lat=${lat}&lng=${lng}`);
    },
  });

  return null;
}

export default Map;
