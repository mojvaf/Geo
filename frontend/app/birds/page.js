import { Suspense } from "react";
import BirdsList from "@/_components/BirdsList";
import Spinner from "@/_components/Spinner";

export const metadata = {
  title: "Birds",
};

export default function Birds() {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">Our Birds</h1>
      <p className="text-primary-200 text-lg mb-10">
        Graceful yet full of wonder, birds bring the magic of nature closer to
        our everyday lives. Imagine waking up to the soft songs of finches,
        catching the bright flash of a cardinal’s wings, or watching a
        hummingbird hover delicately in midair. Whether soaring high above or
        nesting quietly nearby, each bird tells its own story of beauty and
        freedom. Discover their world, where every feather is a work of art and
        every melody a gentle reminder of nature’s harmony. Welcome to the
        sanctuary of birds.
      </p>
      <Suspense fallback={<Spinner />}>
        <BirdsList />
      </Suspense>
    </div>
  );
}
