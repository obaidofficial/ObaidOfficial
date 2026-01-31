import Link from "next/link";
import React from "react";
import Calendly from "./Calendly";

const ContactDetails = () => {
  return (
    <div className="bg-[#fcfcfc] dark:bg-[#090909]">
      <div className="pt-6 md:pt-16 w-[94%] md:w-325 mx-auto pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-3 lg:gap-6">
          <div className="lg:col-span-5 p-1 flex flex-col items-left">
            <h2 className="text-5xl font-bold mb-4 text-[#161616] dark:text-[#fcfcfc]">
              Let's build something remarkable together.
            </h2>
            <p className="font-thin leading-[1.5em] text-[18px] text-[#161616] dark:text-[#fcfcfc]">
              I don't do forms. We do conversations. Pick a time on our calendar
              that works for you, and we'll jump on a strategy call.
            </p>
            <div className="mt-5">
              <ul className="text-[14px] md:text-[16px] text-[#161616] dark:text-[#fcfcfc] font-thin leading-[1.5em] flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                  <span>30 Minute Introductory Chat</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                  <span>Direct Access to Senior Leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                  <span>Free Project Audit & Estimates</span>
                </li>
              </ul>
            </div>
            <hr className="text-[#747474]/20 my-5" />
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-[96%] mt-2">
              <Link
                href="https://www.facebook.com/people/Obaid-Shah/100086097060363/"
                target="_blank"
              >
                <span className="flex text-sm items-center gap-2 text-[#161616] dark:text-[#fcfcfc] bg-[#fcfcfc] hover:bg-gray-100 dark:bg-[#ffffff26] dark:hover:bg-[#ffffff20] rounded-lg px-4 py-2 font-medium border border-[#a1a1a1]/50 dark:border-[#ffffff26]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                    aria-hidden="true"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  Facebook
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/obaid-ullah-1aa103353"
                target="_blank"
              >
                <span className="flex text-sm items-center gap-2 text-[#161616] dark:text-[#fcfcfc] bg-[#fcfcfc] hover:bg-gray-100 dark:bg-[#ffffff26] dark:hover:bg-[#ffffff20] rounded-lg px-4 py-2 font-medium border border-[#a1a1a1]/50 dark:border-[#ffffff26]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  Linkedin
                </span>
              </Link>
              <Link href="https://github.com/obaidofficial" target="_blank">
                <span className="flex text-sm items-center gap-2 text-[#161616] dark:text-[#fcfcfc] bg-[#fcfcfc] hover:bg-gray-100 dark:bg-[#ffffff26] dark:hover:bg-[#ffffff20] rounded-lg px-4 py-2 font-medium border border-[#a1a1a1]/50 dark:border-[#ffffff26]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                    aria-hidden="true"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  Github
                </span>
              </Link>
              <Link
                href="https://www.instagram.com/obaid_ullah312"
                target="_blank"
              >
                <span className="flex text-sm items-center gap-2 text-[#161616] dark:text-[#fcfcfc] bg-[#fcfcfc] hover:bg-gray-100 dark:bg-[#ffffff26] dark:hover:bg-[#ffffff20] rounded-lg px-4 py-2 font-medium border border-[#a1a1a1]/50 dark:border-[#ffffff26]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                    aria-hidden="true"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  Instagram
                </span>
              </Link>
              <Link
                href="https://www.youtube.com/@obaidofficials"
                target="_blank"
              >
                <span className="flex text-sm items-center gap-2 text-[#161616] dark:text-[#fcfcfc] bg-[#fcfcfc] hover:bg-gray-100 dark:bg-[#ffffff26] dark:hover:bg-[#ffffff20] rounded-lg px-4 py-2 font-medium border border-[#a1a1a1]/50 dark:border-[#ffffff26]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                    aria-hidden="true"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                  YouTube
                </span>
              </Link>
              <Link href="mailto:itsobaidofficial@gmail.com">
                <span className="flex text-sm items-center gap-2 text-[#161616] dark:text-[#fcfcfc] bg-[#fcfcfc] hover:bg-gray-100 dark:bg-[#ffffff26] dark:hover:bg-[#ffffff20] rounded-lg px-4 py-2 font-medium border border-[#a1a1a1]/50 dark:border-[#ffffff26]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                    aria-hidden="true"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                  itsobaidofficial@gmail.com
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 py-6 px-10 bg-[#ffffff] rounded-lg dark:bg-[#161616] h-180 shadow-sm border border-[#747474]/20">
            {/* Calendly */}
            <Calendly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
