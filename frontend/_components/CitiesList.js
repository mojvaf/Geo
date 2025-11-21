"use client";

import CityItem from "./CityItem";
import { useSelector } from "react-redux";

function CitiesList() {
  const adventures = useSelector((state) => state.adventures.features);
  return (
    <ul>
      {adventures.map((feature) => (
        <CityItem key={feature.id} feature={feature} />
      ))}
    </ul>
  );
}

export default CitiesList;
