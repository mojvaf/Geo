import Link from "next/link";

export default function SideBar() {
  return (
    <aside className="flex flex-col items-center gap-4 w-full">
      <h2 className="text-white text-xl mb-4">Adventure Menu</h2>
      <nav className="flex flex-row gap-2">
        <Link
          href="/adventure/cities"
          className="text-white hover:text-gray-300"
        >
          Cities
        </Link>
        <Link
          href="/adventure/countries"
          className="text-white hover:text-gray-300"
        >
          Countries
        </Link>
        <Link href="/adventure/form" className="text-white hover:text-gray-300">
          Form
        </Link>
      </nav>
    </aside>
  );
}
