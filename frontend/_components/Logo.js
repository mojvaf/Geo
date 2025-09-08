import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <img src="/bird.jpg" height="90" width="90" alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100 ">
        The Wild Birds
      </span>
    </Link>
  );
}

export default Logo;
