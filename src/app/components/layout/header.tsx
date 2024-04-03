"use client"

import React, { useState } from "react";
import { links } from "@/app/data/navLinks";
import { MenuOutlined, ModeNight, WbSunny } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useTheme } from "next-themes";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header
      className={`bg-white text-black dark:bg-slate-700 dark:text-white h-16`}
    >
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img
            className="w-16 cursor-pointer"
            src="https://static.vecteezy.com/system/resources/previews/004/191/267/original/exercise-color-icon-man-workout-gym-activity-athlete-with-dumbell-training-and-bodybuilding-personal-coach-healthcare-physical-wellness-person-stretching-isolated-illustration-vector.jpg"
            alt="..."
          />
        </div>
        <div
          className={`md:static absolute md:min-h-fit  ${
            menuOpen
              ? "right-0 top-16 items-end  z-[999] w-fit h-fit"
              : "left-0 -top-[100%] items-center place-content-evenly min-h-[60vh]"
          } md:w-auto w-full flex px-5`}
        >
          <ul className={`flex ${menuOpen ? "flex-col" : "flex-row"} gap-8`}>
            {links.map((link, key) => (
              <li key={key}>
                <a className="hover:text-gray-500" href={link.hash}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-green-400 text-white px-5 py-2 rounded-full hover:bg-green-600">
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
          <MenuOutlined
            onClick={toggleMenu}
            name="menu"
            className="text-3xl cursor-pointer md:hidden"
          />
        </div>
      </nav>
    </header>
  );
}
