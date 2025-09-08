import Link from "next/link";
import Image from "next/image";
import logo from "@/public/mo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        height="60"
        width="60"
        quality={100}
        alt="The Wild Oasis logo"
      />
      <span className="text-primary-300 ">The Wild Birds</span>
    </Link>
  );
}

export default Logo;
