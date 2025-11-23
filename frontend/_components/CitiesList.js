"use client";

import CityItem from "./CityItem";
import { useSelector } from "react-redux";
import Message from "./Message";

function CitiesList() {
  const adventures = useSelector((state) => state.adventures.features);

  if (!adventures.length) return <Message message="Please choice your city" />;

  return (
    <ul className="w-full h-[65vh] list-none overflow-y-scroll overflow-x-hidden flex flex-col gap-[1.4rem] [&::-webkit-scrollbar]:w-0">
      {adventures.map((feature) => (
        <CityItem key={feature.id} feature={feature} />
      ))}
    </ul>
  );
}

export default CitiesList;
