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
            <h2 className="text-[36px] md:text-[60px] font-medium mb-4 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
              About Me
            </h2>
            <p className="text-[16px] mb-4 md:mb-2 w-full md:text-[18px] leading-[1.5em] text-[#161616] dark:text-[#fcfcfc] font-thin">
              I’m Obaid Ullah Shah, a passionate Web Developer specializing in
              creating modern, fast, and responsive websites. I help businesses
              and individuals bring their ideas to life through clean design and
              efficient code.
            </p>
            <p className="text-[16px] mb-4 md:mb-2 w-full md:text-[18px] leading-[1.5em] text-[#161616] dark:text-[#fcfcfc] font-thin">
              With strong expertise in HTML, CSS, JavaScript, Tailwind CSS, and
              WordPress, I build high-performance websites that focus on user
              experience, speed, and scalability. My goal is to create digital
              products that not only look great but also deliver real results.
            </p>
            <p className="text-[16px] mb-4 md:mb-7 w-full md:text-[18px] leading-[1.5em] text-[#161616] dark:text-[#fcfcfc] font-thin">
              I’ve worked on multiple projects including business websites,
              eCommerce stores, and custom WordPress solutions. I’m always
              excited to take on new challenges and transform ideas into
              powerful online experiences.
            </p>
            <div className="mb-10">
              <Link href="/about">
                <PrimaryButton>Read More</PrimaryButton>
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
              <div className="col-span-1 px-0 pb:2 md:pb-0 flex flex-col items-center">
                <h4 className="text-[48px] tracking-tighter leading-[1.2em] text-[#161616] dark:text-[#fcfcfc]">
                  70+
                </h4>
                <p className="text-[#161616] dark:text-[#fcfcfc] font-light">
                  Projects
                </p>
              </div>
              <div className="col-span-1 px-0 pb:2 md:pb-0 flex flex-col items-center">
                <h4 className="text-[48px] tracking-tighter leading-[1.2em] text-[#161616] dark:text-[#fcfcfc]">
                  99%
                </h4>
                <p className="text-[#161616] dark:text-[#fcfcfc] font-light">
                  Success
                </p>
              </div>
              <div className="col-span-1 px-0 pb:2 md:pb-0 flex flex-col items-center">
                <h4 className="text-[48px] tracking-tighter leading-[1.2em] text-[#161616] dark:text-[#fcfcfc]">
                  28+
                </h4>
                <p className="text-[#161616] dark:text-[#fcfcfc] font-light">
                  Clients
                </p>
              </div>
              <div className="col-span-1 px-0 pb:2 md:pb-0 flex flex-col items-center">
                <h4 className="text-[48px] tracking-tighter leading-[1.2em] text-[#161616] dark:text-[#fcfcfc]">
                  4.7+
                </h4>
                <p className="text-[#161616] dark:text-[#fcfcfc] font-light">
                  Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
