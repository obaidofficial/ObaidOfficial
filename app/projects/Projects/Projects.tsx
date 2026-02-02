import PrimaryButton from "@/components/Helper/PrimaryButton";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="bg-[#fcfcfc] dark:bg-[#090909]">
      <div className="pt-6 md:pt-16 w-[94%] md:w-325 mx-auto pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 mt-8">
          <div className="col-span-1 border rounded-xl border-[#747474]/20 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div>
                <Image
                  src="/images/projects/WTF.webp"
                  alt="Client"
                  width={1600}
                  height={1600}
                  className="rounded-t-lg"
                />
              </div>
              <div className=" px-6 py-4">
                <h3 className="text-[20px] md:text-[24px] font-medium text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
                  Wear To Fit
                </h3>
                <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc] mt-1.5">
                  A Shopify Store, that sell garments like Hoodies, T-Shirts,
                  Trousers and much more.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div>
                <Image
                  src="/images/projects/TAG.webp"
                  alt="Client"
                  width={1600}
                  height={1600}
                  className="rounded-t-lg"
                />
              </div>
              <div className=" px-6 py-4">
                <h3 className="text-[20px] md:text-[24px] font-medium text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
                  The Arabic Guide
                </h3>
                <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc] mt-1.5">
                  A LMS website, Using WordPress CMS to Deliver the Arabic
                  Lectures to understand Holy Quran.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div>
                <Image
                  src="/images/projects/LAM.webp"
                  alt="Client"
                  width={1600}
                  height={1600}
                  className="rounded-t-lg"
                />
              </div>
              <div className=" px-6 py-4">
                <h3 className="text-[20px] md:text-[24px] font-medium text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
                  Look At Me Marketing
                </h3>
                <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc] mt-1.5">
                  A Digital Marketing Agency, provides Services like Web
                  Development, Marketing and much more.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div>
                <Image
                  src="/images/projects/NAK.webp"
                  alt="Client"
                  width={1600}
                  height={1600}
                  className="rounded-t-lg"
                />
              </div>
              <div className=" px-6 py-4">
                <h3 className="text-[20px] md:text-[24px] font-medium text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
                  Naser Al Kashmiri
                </h3>
                <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc] mt-1.5">
                  A LMS website, to Deliver the Translation of The Quran to
                  understand main purose of Holy Quran.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/contact">
            <PrimaryButton>Contact Me</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
