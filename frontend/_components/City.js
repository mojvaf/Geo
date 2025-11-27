"use client";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BackButton from "./BackButton";

function City({ city }) {
  const { cityName, date, notes } = city.properties;

  const searchParams = useSearchParams();
  const router = useRouter();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div>
      <h1>{cityName}</h1>
      <p>Date: {date}</p>
      <p>Notes: {notes}</p>
      <div>Lat: {lat}</div>
      <div>Lng: {lng}</div>
      <BackButton />
    </div>
  );
}

export default City;
