"use client";

import CityItem from "./CityItem";
import { useSelector } from "react-redux";

function CitiesList() {
  const adventures = useSelector((state) => state.adventures.features);
  return (
    <ul>
      <li>
        {adventures.map((feature) => (
          <CityItem feature={feature} />
        ))}
      </li>
    </ul>
  );
}

export default CitiesList;
