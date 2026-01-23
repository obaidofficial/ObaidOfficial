import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-[#f1f1f1] dark:bg-[#252525]">
      <div className="pt-8 w-[94%] lg:w-[90%] mx-auto pb-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-5">
          <div className="lg:col-span-2 p-1 flex justify-center items-center">
            <Link href="/">
              <Image
                src="/images/obaidLogo.webp"
                alt="Obaid Logo"
                width={100}
                height={60}
                className="brightness-0 dark:invert-100"
              />
            </Link>
          </div>
          <div className="lg:col-span-2 p-1 flex justify-center items-center">
            <ul className="flex-wrap flex justify-center items-center gap-y-1 gap-x-6 md:gap-10">
              <li className="text-[#00000090] font-light text-[16px] md:text-[18px] dark:text-white/80 cursor-pointer hover:text-black dark:hover:text-white">
                <Link href="#">Home</Link>
              </li>
              <li className="text-[#00000090] font-light text-[16px] md:text-[18px] dark:text-white/80 cursor-pointer hover:text-black dark:hover:text-white">
                <Link href="#">About</Link>
              </li>
              <li className="text-[#00000090] font-light text-[16px] md:text-[18px] dark:text-white/80 cursor-pointer hover:text-black dark:hover:text-white">
                <Link href="#">Projects</Link>
              </li>
              <li className="text-[#00000090] font-light text-[16px] md:text-[18px] dark:text-white/80 cursor-pointer hover:text-black dark:hover:text-white">
                <Link href="#">Services</Link>
              </li>
              <li className="text-[#00000090] font-light text-[16px] md:text-[18px] dark:text-white/80 cursor-pointer hover:text-black dark:hover:text-white">
                <Link href="#">Reviews</Link>
              </li>
              <li className="text-[#00000090] font-light text-[16px] md:text-[18px] dark:text-white/80 cursor-pointer hover:text-black dark:hover:text-white">
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 p-1 flex justify-center items-center">
            <ul className="flex lg:justify-end justify-center items-center gap-4">
              <li className="text-[#00000090] text-[20px] dark:text-white/80 cursor-pointer hover:text-[#4941e4]">
                <Link href="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="text-[#00000090] text-[20px] dark:text-white/80 cursor-pointer hover:text-[#4941e4]">
                <Link href="#">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="text-[#00000090] text-[20px] dark:text-white/80 cursor-pointer hover:text-[#4941e4]">
                <Link href="#">
                  <FiInstagram />
                </Link>
              </li>
              <li className="text-[#00000090] text-[20px] dark:text-white/80 cursor-pointer hover:text-[#4941e4]">
                <Link href="#">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="text-[#00000020] dark:text-white/10 mt-5 mb-2" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-2">
          <div className="lg:col-span-2 p-1 flex flex-row items-center justify-center font-light text-black/70 dark:text-white/70">
            © 2026 Obaid Official.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
