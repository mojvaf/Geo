"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import BackButton from "./BackButton";

function Bird({ bird }) {
  const searchParams = useSearchParams();
  const { name } = bird;

  return (
    <div>
      <p>{name}</p>
      <BackButton />
    </div>
  );
}

export default Bird;
