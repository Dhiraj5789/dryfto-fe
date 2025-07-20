'use client'

import Button from "@/components/common/button";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-5 fixed flex justify-between gap-4 backdrop-blur-md bg-white/80 h-15 items-center font-normal w-full px-4 border-b border-orange-100">
      <div className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        Dryfto
      </div>
      <div className="flex justify-center gap-4">
        <Link href="/explore" className="hover:text-orange-500">Explore</Link>
        <Link href="/itineraries" className="hover:text-orange-500">Itineraries</Link>
        <Link href="/community" className="hover:text-orange-500">Community</Link>
        <Link href="/about" className="hover:text-orange-500">About</Link>
      </div>
      <div className="flex justify-center gap-4">
        <Button variant="base" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 p-5 rounded-xl" onClick={() => {
          console.log("Get Started");
        }}>Get Started</Button>
      </div>
    </nav>
  );
} 