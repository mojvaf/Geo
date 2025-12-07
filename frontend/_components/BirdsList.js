"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBirds } from "../store/BirdsSlice";
import Message from "./Message";

function BirdsList() {
  const dispatch = useDispatch();
  const birds = useSelector((state) => state.birds.list);

  useEffect(() => {
    dispatch(fetchBirds());
  }, [dispatch]);

  if (!birds || birds.length === 0)
    return <Message message={"There is no birds"} />;

  return (
    <ul>
      {birds.map((feature) => (
        <li key={feature.id}>{feature.name}</li>
      ))}
    </ul>
  );
}

export default BirdsList;
