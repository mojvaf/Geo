"use client";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";

function City({ city }) {
  const { cityName, date, notes } = city.properties;

  const searchParams = useSearchParams();
  const router = useRouter();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lat", "43.123");
    params.set("lng", "-79.456");

    // Push updated params to URL
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <h1>{cityName}</h1>
      <p>Date: {date}</p>
      <p>Notes: {notes}</p>
      <div>Lat: {lat}</div>
      <div>Lng: {lng}</div>
      <button onClick={handleClick}>change</button>
    </div>
  );
}

export default City;
