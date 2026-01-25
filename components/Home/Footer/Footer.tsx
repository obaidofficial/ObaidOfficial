import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white border-t-4 border-t-indigo-600 dark:border-t-blue-500 dark:bg-slate-900">
      <div className="pt-16 w-[94%] md:w-325 mx-auto pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-15">
          <div className="lg:col-span-1 p-1 flex flex-col items-left">
            <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Let's build{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-600">
                something iconic
              </span>{" "}
              together.
            </h2>
            <div className="flex flex-wrap items-center gap-2 w-[80%]">
              <span className="flex text-sm items-center gap-2 text-gray-900 dark:text-white bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full px-6 py-3 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-facebook"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Facebook
              </span>
              <span className="flex text-sm items-center gap-2 text-gray-900 dark:text-white bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full px-6 py-3 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-linkedin"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                Linkedin
              </span>
              <span className="flex text-sm items-center gap-2 text-gray-900 dark:text-white bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full px-6 py-3 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-instagram"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                Instagram
              </span>

              <span className="flex text-sm items-center gap-2 text-gray-900 dark:text-white bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full px-6 py-3 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-github"
                  aria-hidden="true"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                Github
              </span>
              <span className="flex text-sm items-center gap-2 text-gray-900 dark:text-white bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full px-6 py-3 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-mail"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                itsobaidofficial@gmail.com
              </span>
            </div>
          </div>
          <div className="lg:col-span-1 py-6 px-10 bg-[#f9fafb] rounded-3xl dark:bg-slate-800/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="col-span-1">
                <ul className="flex-col flex justify-center items-left gap-5.5">
                  <li className="text-[#000000] font-bold text-[16px] md:text-[16px] dark:text-white cursor-pointer hover:translate-x-1 transition-all duration-300">
                    <Link href="#">Home</Link>
                  </li>
                  <li className="text-[#000000] font-bold text-[16px] md:text-[16px] dark:text-white cursor-pointer hover:translate-x-1 transition-all duration-300">
                    <Link href="#">About</Link>
                  </li>
                  <li className="text-[#000000] font-bold text-[16px] md:text-[16px] dark:text-white cursor-pointer hover:translate-x-1 transition-all duration-300">
                    <Link href="#">Projects</Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <ul className="flex-col flex justify-center items-left gap-5.5">
                  <li className="text-[#000000] font-bold text-[16px] md:text-[16px] dark:text-white cursor-pointer hover:translate-x-1 transition-all duration-300">
                    <Link href="#">Services</Link>
                  </li>
                  <li className="text-[#000000] font-bold text-[16px] md:text-[16px] dark:text-white cursor-pointer hover:translate-x-1 transition-all duration-300">
                    <Link href="#">Reviews</Link>
                  </li>
                  <li className="text-[#000000] font-bold text-[16px] md:text-[16px] dark:text-white cursor-pointer hover:translate-x-1 transition-all duration-300">
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2">
                <hr className="text-[#00000020] dark:text-white/10 mt-3 mb-2" />
                <div className="opacity-50 text-sm uppercase font-medium tracking-widest">
                  © 2026 Obaid Official. All rights reserved. • Designed &
                  Developed by Obaid
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
