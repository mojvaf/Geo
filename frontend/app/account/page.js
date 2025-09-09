import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Account",
};

export default function Account() {
  return (
    <h1 className="text-4xl mb-10 text-accent-400 font-medium">
      Welcome Marry
      <div>
        <Link href="/account/portfolio" className="text-accent-400">
          go
        </Link>
      </div>
    </h1>
  );
}
