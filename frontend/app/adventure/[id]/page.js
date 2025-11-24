"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCity } from "@/store/adventuresSlice";
import City from "@/_components/City";
import Loading from "@/_components/loading";
import Message from "@/_components/Message";

export default function page({ params }) {
  const { id } = params;
  const dispatch = useDispatch();

  const city = useSelector((state) => state.adventures.current);
  const status = useSelector((state) => state.adventures.status);

  useEffect(() => {
    dispatch(fetchCity(id));
  }, [dispatch, id]);

  if (status === "idle" || !city) return <Loading />;
  if (status === "failed") return <Message message="Can not find the ID" />;

  return <City city={city} />;
}
