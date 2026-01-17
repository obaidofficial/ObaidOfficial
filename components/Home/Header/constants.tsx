import React from "react";
import { MainNavItem } from "./types";
import { BiSolidFile, BiSolidFolder, BiSolidPencil } from "react-icons/bi";

export const NAVIGATION_DATA: MainNavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Reviews",
    href: "/reviews",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
