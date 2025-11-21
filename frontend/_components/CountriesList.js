"use client";

import { useSelector } from "react-redux";
import CountryItem from "./CountryItem";

function CountriesList() {
  const adventures = useSelector((state) => state.adventures.features);

  return (
    <ul>
      {adventures.map((feature) => (
        <CountryItem key={feature.id} feature={feature} />
      ))}
    </ul>
  );
}

export default CountriesList;
