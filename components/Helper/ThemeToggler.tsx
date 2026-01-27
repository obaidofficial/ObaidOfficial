"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 transitio w-10 h-10 bg-[#f9fafb] dark:bg-[#ffffff26] border-[#a1a1a1]/50 border dark:border-[#ffffff26] rounded-lg flex flex-col items-center justify-center shadow-xs outline-none"
    >
      {currentTheme === "dark" ? (
        <BiSun className="text-white dark:text-white w-5 h-5 cursor-pointer" />
      ) : (
        <BiMoon className="text-black dark:text-black w-5 h-5 cursor-pointer" />
      )}
    </button>
  );
};

export default ThemeToggler;
