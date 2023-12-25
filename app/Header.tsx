"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import NavBar from "./NavBar";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header className="sticky top-0 z-10 h-16 px-4 bg-headerBackground dark:bg-darkHeaderBackground">
      {/* added mx-2 to compensate p-2 class on button */}
      <div className="flex items-center justify-between h-16 max-w-xl mx-auto">
        {pathname !== "/" ? (
          <button
            onClick={() => {
              router.back();
            }}
            className="mx-2 flex items-center gap-0.5 text-headingText dark:text-darkHeadingText"
          >
            <ChevronLeftIcon aria-hidden className="w-6 h-6" />
            <span className="text-lg">Back</span>
          </button>
        ) : (
          <Link href="/" className="flex justify-center mx-2">
            <h1 className="mx-auto text-4xl font-extrabold text-headingText dark:text-darkHeadingText">
              Hex Cal
            </h1>
          </Link>
        )}
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
