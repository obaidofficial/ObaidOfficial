import PrimaryButton from "@/components/Helper/PrimaryButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <div className="bg-[#fcfcfc] dark:bg-[#090909]">
      <div className="pt-16 w-[94%] md:w-325 mx-auto pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-1 lg:gap-6 mt-8 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group">
          <div className="col-span-1 md:col-span-5 p-2 md:p-6 flex items-center md:justify-start justify-center">
            <div>
              <h3 className="text-[30px] md:text-[44px] font-medium text-[#161616] dark:text-[#fcfcfc] leading-[1.2em] tracking-[-2px] md:mb-4 mb-2 text-center md:text-left">
                Have a project you’d like to discuss?
              </h3>

              <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc] text-center md:text-left">
                I help businesses and individuals create high-quality,
                performance-focused websites that stand out. Let’s collaborate
                and bring your vision to life with clean design and efficient
                development.
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 p-2 md:p-6 flex items-center md:justify-end justify-center">
            <div className="text-center md:text-right">
              <Link href="/contact">
                <PrimaryButton>Contact Me Now</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
