"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Bars2Icon } from "@heroicons/react/24/outline";
import NavBar from "./NavBar";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 flex items-center justify-between h-16 px-4 bg-white">
      {/* added mx-2 to compensate p-2 class on button */}
      {pathname !== "/" ? (
        <Link href="/" className="mx-2 flex items-center gap-0.5 text-gray-950">
          <ChevronLeftIcon aria-hidden className="w-6 h-6" />
          <span className="text-lg">Back</span>
        </Link>
      ) : (
        <Link href="/" className="flex justify-center mx-2">
          <h1 className="mx-auto text-4xl font-extrabold text-brandColor">
            Hex Cal
          </h1>
        </Link>
      )}
      <NavBar />
    </header>
  );
};

export default Header;
