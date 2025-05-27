import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h1 className="text-[32px] cursor-pointer">LOGO</h1>
    </Link>
  );
}
