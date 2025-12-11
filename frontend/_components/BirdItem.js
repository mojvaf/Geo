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
    <li className="w-full sm:w-1/2 md:w-1/3 p-2">
      <Link
        href=""
        className="flex flex-col h-[400px] bg-primary-800 rounded-xl overflow-hidden"
      >
        <div className="flex-shrink-0 relative w-full h-64 rounded-xl">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain w-full h-full p-4 "
            quality={70}
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between p-4 gap-2">
          <div className="flex-1">
            <div className="text-lg font-bold">{name}</div>
            <div className="text-sm">{habitats}</div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default BirdItem;
