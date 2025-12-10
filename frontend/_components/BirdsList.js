"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBirds } from "../store/BirdsSlice";
import Message from "./Message";
import BirdItem from "./BirdItem";

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
      {birds.map((bird) => (
        <BirdItem key={bird.id} bird={bird} />
      ))}
    </ul>
  );
}

export default BirdsList;
