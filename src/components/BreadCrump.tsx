import Image from "next/image";
import Link from "next/link";

export default function BreadCrump() {
  function renderItems() {
    return (
      <nav aria-label="breadcrumb" className="">
        <ol className="flex space-x-2 items-center">
          <li>
            <Link href="/" className="text-foreground">
              Inicio
            </Link>
          </li>
          <li>
            <Image
              src={"/arrow-down.svg"}
              width={10}
              height={10}
              alt="breadcrump-divider"
              className="-rotate-90"
            ></Image>
          </li>
          <li aria-current="page" className="text-black">
            Linha Ortopedic
          </li>
        </ol>
      </nav>
    );
  }

  return renderItems();
}
