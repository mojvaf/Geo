"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";

import { fetchCities } from "../store/adventuresSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function Map() {
  const router = useRouter();
  const dispatch = useDispatch();
  const adventures = useSelector((state) => state.adventures.features);
  // const searchParams = useSearchParams()
  // const lat = searchParams.get('lat')
  // const lng = searchParams.get('lng')

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <>
      <button onClick={() => router.push("/adventure/form")}>fff</button>
    </>
  );
}

export default Map;
