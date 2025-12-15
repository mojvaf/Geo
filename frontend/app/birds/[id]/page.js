"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBird } from "@/store/BirdsSlice";
import Loading from "@/_components/loading";
import Message from "@/_components/Message";
import Image from "next/image";
import BirdMap from "@/_components/BridMap";
import BackButton from "@/_components/BackButton";

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
  const {
    name,
    habitats,
    seasons,
    description,
    image,
    regions: {
      features: [
        {
          geometry: { coordinates },
          properties: { name: regionName, country },
        },
      ],
    },
  } = bird;
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{name}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="flex-1">
          <div className="flex-shrink-0 relative w-full h-64 rounded-xl">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain w-full h-full p-4"
              quality={80}
            />
          </div>

          <p className="mt-4 text-lg">{description}</p>
          <BackButton />
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-primary-700 p-4 rounded-xl">
            <p>
              <strong>Habitats:</strong> {habitats}
            </p>
            <p>
              <strong>Seasons:</strong> {seasons.join(", ")}
            </p>
            <p>
              <strong>Region:</strong> {regionName}
            </p>
            <p>
              <strong>Country:</strong> {country}
            </p>
          </div>

          {/* Map */}
          <div className="h-[300px] rounded-xl overflow-hidden">
            <BirdMap coordinates={coordinates} />
          </div>
        </div>
      </div>
    </div>
  );
}
