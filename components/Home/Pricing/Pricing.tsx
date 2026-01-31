import PrimaryButton from "@/components/Helper/PrimaryButton";
import Link from "next/link";
import React from "react";

const Pricing = () => {
  return (
    <div className="bg-[#fcfcfc] dark:bg-[#090909]">
      <div className="pt-16 w-[94%] md:w-325 mx-auto pb-16">
        <h2 className="text-[32px] md:text-[50px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px] text-center">
          Pricing
        </h2>
        <p className="font-thin leading-[1.5em] text-[16px] text-center max-w-200 mx-auto">
          Simple and honest pricing designed for startups, small businesses, and
          growing brands who want powerful, high-performance websites without
          hidden costs or compromises.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-2 mt-8">
          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#f5f5f5] dark:bg-[#161616] flex flex-col justify-between">
            <div>
              <h3 className="text-[32px] md:text-[40px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
                $89{" "}
                <span className="text-[18px] font-light text-[#161616]/50 dark:text-[#fcfcfc]/50">
                  /Project
                </span>
              </h3>
              <p className="font-thin leading-[1.5em] text-[15px]">
                A simple signle page website, most likely used for Portfolio or
                Single Product websites.
              </p>
              <hr className="text-[#747474]/20 my-3" />
              <div>
                <ul className="text-[14px] md:text-[16px] text-[#161616] dark:text-[#fcfcfc] font-thin leading-[1.5em] flex flex-col gap-1">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>WordPress Website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Single Page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Hosting Setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>2 Revisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>SEO Friendly Layout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Contact Form</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>1 GSAP Animation</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/contact" className="flex flex-col mt-8">
              <PrimaryButton>Contact Now</PrimaryButton>
            </Link>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#f5f5f5] dark:bg-[#161616] flex flex-col justify-between">
            <div>
              <h3 className="text-[32px] md:text-[40px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
                $199{" "}
                <span className="text-[18px] font-light text-[#161616]/50 dark:text-[#fcfcfc]/50">
                  /Project
                </span>
              </h3>
              <p className="font-thin leading-[1.5em] text-[15px]">
                A full fledge website, most likely used for Blogs, Business &
                E-commerce Store websites.
              </p>
              <hr className="text-[#747474]/20 my-3" />
              <div>
                <ul className="text-[14px] md:text-[16px] text-[#161616] dark:text-[#fcfcfc] font-thin leading-[1.5em] flex flex-col gap-1">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>WordPress/Sopify Website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>5 - 8 Pages (Necessary Only)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Hosting Setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>5 Revisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>SEO Friendly Layout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Contact Form</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>3 GSAP Animations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Woo Commerce Setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Payment Gateway Integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Speed Optimization</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/contact" className="flex flex-col mt-8">
              <PrimaryButton>Contact Now</PrimaryButton>
            </Link>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#f5f5f5] dark:bg-[#161616] flex flex-col justify-between">
            <div>
              <h3 className="text-[32px] md:text-[40px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
                $329{" "}
                <span className="text-[18px] font-light text-[#161616]/50 dark:text-[#fcfcfc]/50">
                  /Project
                </span>
              </h3>
              <p className="font-thin leading-[1.5em] text-[15px]">
                A full fledge website, most likely used for Blogs, Large
                Business, Service Base & E-commerce Store websites.
              </p>
              <hr className="text-[#747474]/20 my-3" />
              <div>
                <ul className="text-[14px] md:text-[16px] text-[#161616] dark:text-[#fcfcfc] font-thin leading-[1.5em] flex flex-col gap-1">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>WordPress/Sopify Website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Multi Pages (Dynamic)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Hosting Setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Free Hosting 1 Year</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>10 Revisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>SEO Friendly Layout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Contact Form</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>5 GSAP Animations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Woo Commerce Setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Payment Gateway Integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Speed Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>30 Days Free Support</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/contact" className="flex flex-col mt-8">
              <PrimaryButton>Contact Now</PrimaryButton>
            </Link>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#f5f5f5] dark:bg-[#161616] flex flex-col justify-between">
            <div>
              <h3 className="text-[32px] md:text-[40px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
                Custom
              </h3>
              <p className="font-thin leading-[1.5em] text-[15px]">
                A full fledge custom website, for Blogs, Large Business, Service
                Base & E-commerce Store websites.
              </p>
              <hr className="text-[#747474]/20 my-3" />
              <div>
                <ul className="text-[14px] md:text-[16px] text-[#161616] dark:text-[#fcfcfc] font-thin leading-[1.5em] flex flex-col gap-1">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Next JS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Multi Pages (Dynamic)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Hosting Setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Free Hosting 1 Year</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>15 Revisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>SEO Friendly Layout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Contact Form</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>5 GSAP Animations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Woo Commerce Setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Payment Gateway Integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>Speed Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>30 Days Free Support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 dark:bg-[url('/images/listIcons/check-dark.svg')] bg-[url('/images/listIcons/check-light.svg')] bg-contain bg-no-repeat"></span>
                    <span>TypeScript & Tailwind CSS</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/contact" className="flex flex-col mt-8">
              <PrimaryButton>Contact Now</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
