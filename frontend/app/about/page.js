import Image from "next/image";
import image1 from "@/public/bg1.jpg";
import image2 from "@/public/bg2.jpg";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Birds
        </h1>

        <div className="space-y-8">
          <p>
            Where nature’s beauty and wonder take flight. Hidden among tranquil
            landscapes, this is your sanctuary away from home. But it’s not just
            about observing birds — it’s about the experience of reconnecting
            with the wild and enjoying life’s simple pleasures in harmony with
            nature.
          </p>
          <p>
            Our collection of graceful birds is full of color, song, and
            character, each one a reminder of freedom and beauty. Watch them
            glide across open skies, nestle in quiet trees, or greet the dawn
            with melodies that lift the soul.
          </p>
          <p>
            This is where unforgettable moments are created, surrounded by
            wings, songs, and the rhythm of nature. A place to pause, breathe,
            and feel the joy of being present in a world alive with wonder.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image src={image1} alt="Red birds" placeholder="blur" quality={80} />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image src={image2} fill className="object-cover" alt="Birds" />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Caring for nature’s wonders with family passion since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Since 1962, our family has cherished the beauty and wonder of birds.
            What began with a simple passion passed down by our grandparents has
            grown into a lifelong dedication to sharing these remarkable
            creatures with others.
          </p>
          <p>
            Through the years, we’ve remained true to that vision — blending the
            timeless magic of birds with the personal touch only a family
            tradition can offer. With us, you’re not just an observer; you’re
            part of our extended flock. So come discover the world of birds,
            where every visit feels like returning to something familiar,
            joyful, and free.
          </p>

          <div className="py-12">
            <a
              href="/birds"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our Birds
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
