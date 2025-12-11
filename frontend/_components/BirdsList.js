"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBirds } from "../store/BirdsSlice";
import Message from "./Message";
import BirdItem from "./BirdItem";
import Spinner from "./Spinner";

function BirdsList() {
  const dispatch = useDispatch();
  const birds = useSelector((state) => state.birds.list);
  const status = useSelector((state) => state.birds.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBirds());
    }
  }, [dispatch, status]);

  if (status === "loading") return <Spinner />;

  if (status === "succeeded" && birds.length === 0)
    return <Message message={"There are no birds."} />;

  return (
    <div className="container mx-auto px-4">
      <ul className="flex flex-wrap gap-6 items-center justify-center">
        {birds.map((bird) => (
          <BirdItem key={bird.id} bird={bird} />
        ))}
      </ul>
    </div>
  );
}

export default BirdsList;
