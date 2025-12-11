"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBird } from "@/store/BirdsSlice";
import Bird from "@/_components/Bird";
import Loading from "@/_components/loading";
import Message from "@/_components/Message";

export default function Page({ params }) {
  const { id } = params;
  const dispatch = useDispatch();

  const bird = useSelector((state) => state.birds.current);
  const status = useSelector((state) => state.birds.status);

  useEffect(() => {
    dispatch(fetchBird(id));
  }, [dispatch, id]);

  if (status === "idle" || !bird) return <Loading />;
  if (status === "failed") return <Message message="Can not find the ID" />;
  return <Bird bird={bird} />;
}
