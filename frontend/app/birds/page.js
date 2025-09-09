import Logo from "@/_components/Logo";
import BirdCard from "@/_components/BirdCard";

export const metadata = {
  title: "Birds",
};

export default function Birds() {
  const birds = [];
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
      {birds.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {birds.map((bird) => (
            <BirdCard bird={bird} key={bird.id} />
          ))}
        </div>
      )}
    </div>
  );
}
