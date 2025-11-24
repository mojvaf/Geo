import React from "react";

function City({ city }) {
  const { cityName, date, notes } = city.properties;

  return (
    <div>
      <h1>{cityName}</h1>
      <p>Date: {date}</p>
      <p>Notes: {notes}</p>
    </div>
  );
}

export default City;
