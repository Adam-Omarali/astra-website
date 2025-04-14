"use client";

import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-8 h-16 flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/star 2.png" alt="Astra Logo" width={40} height={40} />
        </Link>
      </div>
    </nav>
  );
};
