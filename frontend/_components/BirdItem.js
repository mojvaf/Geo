import React from "react";
import Link from "next/link";

function BirdItem({ bird }) {
  const { name, habitats } = bird;

  return (
    <li className="w-1/3 sm:w-1/2 md:w-1/3">
      <div>{name}</div>
      <div>{habitats}</div>
    </li>
  );
}

export default BirdItem;
