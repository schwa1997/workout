"use client";

import React from "react";
import { links } from "@/app/data/navLinks";
import { ModeNight, WbSunny } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className={`sticky top-0 z-50 bg-white dark:bg-green-950 dark:text-white w-screen text-black h-16 backdrop-opacity-50`}
    >
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="p-2">
          <img
            className="h-12 cursor-pointer"
            src="/logo.svg"
            alt="..."
          />
        </div>
        <div className="">
          <ul className="flex lg:gap-20 sm:gap-10 gap-2">
            {links.map((link, key) => (
              <li key={key} className="">
                <a
                  className="uppercase font-bold hover:text-green-700"
                  href={link.hash}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <button className="bg-green-400 text-white md:px-5 px-2 md:text-sm text-sm py-2 rounded-full hover:bg-green-600">
            Sign in
          </button>
          {theme === "dark" ? (
            <Button className="text-gray-300" onClick={() => setTheme("light")}>
              <WbSunny />
            </Button>
          ) : (
            <Button className="text-gray-600" onClick={() => setTheme("dark")}>
              <ModeNight />
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
