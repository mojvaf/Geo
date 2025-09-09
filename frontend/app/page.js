import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.jpg";

export default function Home() {
  return (
    <main className="mt-5">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Red Birds"
      />

      <div className="relative z-10 text-center mt-28">
        <h1 className="text-6xl text-primary-50 mb-20 tracking-tight font-normal">
          Welcome to the Backyard Birdsong.
        </h1>

        <Link
          href="/birds"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore Birds
        </Link>
      </div>
    </main>
  );
}
