import Link from "next/link";

export default function SideBar() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link href="/adventure/cities"></Link>
          </li>
          <li>
            <Link href="/adventure/countries">Countries</Link>
          </li>
          <li>
            <Link href="/adventure/form">Form</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
