"use client";
import React from "react";
import ThemeToggle from "./themeToggle";
import { SearchIcon, Settings } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  px-4 py-2">
      <div className="flex items-center gap-8 ">
        <div className="flex h-min w-80 relative">
            <SearchIcon className="absolute right-1 top-1/2 mr-2 size-5 -translate-y-1/2 transform cursor-pointer"/>
            <input className="w-full rounded-2xl p-2  bg-gray-200 dark:bg-transparent dark:border dark:border-neutral-500 focus:outline-none  focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600" type="search" placeholder="Search"/>
        </div>

      </div>
      <div className="flex items-center gap-4">
        <Link href="/settings"><Settings/></Link>
        <div>
          {" "}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
