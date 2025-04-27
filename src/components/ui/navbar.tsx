"use client";

import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black">
      <div id="grad1">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/simple text logo with star.svg"
              alt="Astra Logo"
              width={140}
              height={50}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
