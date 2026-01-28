import PrimaryButton from "@/components/Helper/PrimaryButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-[#fcfcfc] dark:bg-[#090909]">
      <div className="pt-16 w-[94%] md:w-325 mx-auto pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-15">
          <div className="col-span-1 px-0 pb:2 md:pb-0">
            <Image
              src="/images/about/obaidImage.png"
              width={1600}
              height={1600}
              alt="Obaid"
              className="rounded-lg"
            />
          </div>
          <div className="lg:col-span-1 p-1 flex flex-col items-left justify-center">
            <h2 className="text-[36px] md:text-[64px] font-medium mb-4 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-2px]">
              Hi, I am <span className="font-bold">Obaid Ullah</span>
            </h2>
            <p className="text-[16px] mb-4 md:mb-2 w-full md:text-[18px] leading-[1.5em] text-[#161616] dark:text-[#fcfcfc] font-thin">
              I am a Website Developer, I have delivered about 200+ Website in
              my 5+ Years of Experience. My priority for website is Full Fledge
              functionable website with Optimized Speed & Eye Catching Modern
              Layout.
            </p>
            <p className="text-[16px] mb-4 md:mb-2 w-full md:text-[18px] leading-[1.5em] text-[#161616] dark:text-[#fcfcfc] font-thin">
              I have delivered the websites approximately in every Category,
              like E-Commerce Store, Learning Management System (LMS), Blog,
              Business, Portfolio with Single Page Website (Landing page) to
              Multi Page website.
            </p>
            <p className="text-[16px] mb-4 md:mb-7 w-full md:text-[18px] leading-[1.5em] text-[#161616] dark:text-[#fcfcfc] font-thin">
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
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
