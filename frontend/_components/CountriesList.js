"use client";

import { useSelector } from "react-redux";
import CountryItem from "./CountryItem";

function CountriesList() {
  const adventures = useSelector((state) => state.adventures.features);

  return (
    <ul>
      <li className="text-6xl text-primary-50 mb-20 tracking-tight font-normal">
        {adventures.map((feature) => (
          <CountryItem feature={feature} />
        ))}
      </li>
    </ul>
  );
}

export default CountriesList;
