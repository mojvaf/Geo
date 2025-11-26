import React from "react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="p-2 bg-primary-400 rounded"
      onClick={(e) => {
        e.preventDefault();
        router.back();
      }}
    >
      &larr; Back
    </button>
  );
};

export default BackButton;
