import React from "react";

function BirdItem({ bird }) {
  const { name } = bird;

  return <li>{name}</li>;
}

export default BirdItem;
