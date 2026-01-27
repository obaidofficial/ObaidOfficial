import PrimaryButton from "@/components/Helper/PrimaryButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-[#fcfcfc] dark:bg-[#090909]">
      <div className="pt-16 w-[94%] md:w-325 mx-auto pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-15">
          <div className="lg:col-span-1 p-1 flex flex-col items-left justify-center">
            <h2 className="text-6xl font-bold mb-4 text-[#161616] dark:text-[#fcfcfc]">
              Hi, I am Obaid Ullah
            </h2>
            <p className="text-[14px] mb-4 md:mb-2 w-full md:text-[18px] leading-[1.5em] text-[#161616] dark:text-[#fcfcfc]">
              I am a Website Developer, I have delivered about 200+ Website in
              my 5+ Years of Experience. My priority for website is Full Fledge
              functionable website with Optimized Speed & Eye Catching Modern
              Layout.
            </p>
            <p className="text-[14px] mb-4 md:mb-2 w-full md:text-[18px] leading-[1.5em] text-[#161616] dark:text-[#fcfcfc]">
              I have delivered the websites approximately in every Category,
              like E-Commerce Store, Learning Management System (LMS), Blog,
              Business, Portfolio with Single Page Website (Landing page) to
              Multi Page website.
            </p>
            <p className="text-[14px] mb-4 md:mb-7 w-full md:text-[18px] leading-[1.5em] text-[#161616] dark:text-[#fcfcfc]">
              My Speciality is in WordPress, Shopify, Square Space, Kajabi, Wix
              and Framer, etc. I also use custom code for different websites
              which includes php, Tailwind CSS, Vanila CSS, HTML, JavaScript,
              TypeScript, etc.
            </p>
            <div>
              <Link href="/about">
                <PrimaryButton>Read More</PrimaryButton>
              </Link>
            </div>
          </div>
          <div className="col-span-1 px-10">
            <Image
              src="/images/about/obaidImage.png"
              width={1200}
              height={1600}
              alt="Obaid"
              className="rounded-lg grayscale-100 opacity-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
