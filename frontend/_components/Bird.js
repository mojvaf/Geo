import React from "react";
import { useSearchParams } from "next/navigation";
import BackButton from "./BackButton";

function Bird() {
  const searchParams = useSearchParams();
  return (
    <div>
      <p>hello</p>
      <BackButton />
    </div>
  );
}

export default Bird;
