"use client";

import { useSelector } from "react-redux";

function CountryList() {
  const adventures = useSelector((state) => state.adventures.features);

  if (!adventures.length) return <Message message="Add your first note" />;

  return (
    <div>
      <div className="text-6xl text-primary-50 mb-20 tracking-tight font-normal">
        {adventures.map((feature) => (
          <strong>{feature.properties.cityName}</strong>
        ))}
      </div>
    </div>
  );
}

export default CountryList;
