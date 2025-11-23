"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col items-center gap-4 w-full flex-none">
      <h2 className="text-white text-xl mb-4">Adventure Menu</h2>
      <nav className="mt-12 mb-8">
        <ul className="list-none flex rounded-lg bg-primary-600 gap-4 p-1">
          <li>
            <Link
              href="/adventure/cities"
              className={`block no-underline uppercase py-2 px-8 rounded-md ${
                pathname === "/adventure/cities" ? "bg-primary-900" : ""
              }`}
            >
              Cities
            </Link>
          </li>
          <li>
            <Link
              href="/adventure/countries"
              className={`block no-underline uppercase py-2 px-8 rounded-md ${
                pathname === "/adventure/countries" ? "bg-primary-900" : ""
              }`}
            >
              Countries
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
