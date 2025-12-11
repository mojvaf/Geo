import React from "react";
import Link from "next/link";
import Image from "next/image";

function BirdItem({ bird }) {
  const {
    id,
    name,
    seasons,
    habitats,
    description,
    image,
    regions: {
      features: [
        {
          id: regionId,
          properties: { name: regionName, country },
          geometry: { coordinates },
        },
      ],
    },
  } = bird;

  console.log(bird);

  return (
    <li className="w-full flex flex-col  gap-[1.4rem] sm:w-1/2 md:w-1/3">
      <Link href="">
        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            quality={70}
          />
        </div>
        <div>
          Name: <span className="font-bold"> {name}</span>
        </div>
        <div>Habitats: {habitats}</div>
      </Link>
    </li>
  );
}

export default BirdItem;
