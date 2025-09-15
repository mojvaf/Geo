import Link from "next/link";

export default function SideBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/adventure/city">Cities</Link>
        </li>
        <li>
          <Link href="/adventure/country">Countries</Link>
        </li>
        <li>
          <Link href="/adventure/form">Form</Link>
        </li>
      </ul>
    </nav>
  );
}
