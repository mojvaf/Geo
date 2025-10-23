import Link from "next/link";

export default function SideBar() {
  return (
    <aside className="flex flex-col items-center gap-4 w-full overscroll-none">
      <h2 className="text-white text-xl mb-4">Adventure Menu</h2>
      <nav className="mt-12 mb-8">
        <ul className="list-none flex rounded-lg bg-primary-600 gap-4 p-1">
          <li>
            <Link
              href="/adventure/cities"
              className="text-white hover:text-gray-300"
            >
              Cities
            </Link>
          </li>
          <li>
            <Link
              href="/adventure/countries"
              className="text-white hover:text-gray-300"
            >
              Countries
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
