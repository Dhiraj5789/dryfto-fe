'use client'

import Link from "next/link";
import { UserIcon } from "../../common/icons";

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
        <Link 
          href="/profile"
          className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 p-3 rounded-xl transition-all duration-300 hover:scale-105"
        >
          <UserIcon className="w-5 h-5 text-white" />
        </Link>
      </div>
    </nav>
  );
} 