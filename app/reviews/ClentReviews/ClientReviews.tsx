import PrimaryButton from "@/components/Helper/PrimaryButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsStarFill } from "react-icons/bs";

const ClientReviews = () => {
  return (
    <div className="bg-[#fcfcfc] dark:bg-[#090909]">
      <div className="pt-6 md:pt-16 w-[94%] md:w-325 mx-auto pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 mt-8">
          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex gap-6">
                <div>
                  <Image
                    src="/images/testimonials/HusnainMalik.webp"
                    alt="Client"
                    width={65}
                    height={65}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-[17px] md:text-[18px] font-medium text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
                    Husnain Malik
                  </h3>
                  <p className="font-thin leading-[1.5em] text-[14px] text-[#161616] dark:text-[#fcfcfc] mt-0.5">
                    Wear To Fit - CEO
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc] italic mt-8">
              “Outstanding work and great attention to detail. The website runs
              smoothly, looks modern, and performs exactly as expected.
              Communication was clear and professional throughout the project.”
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex gap-6">
                <div>
                  <Image
                    src="/images/testimonials/MuzammilA.webp"
                    alt="Client"
                    width={65}
                    height={65}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-[17px] md:text-[18px] font-medium text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
                    Muzammil Ahmad
                  </h3>
                  <p className="font-thin leading-[1.5em] text-[14px] text-[#161616] dark:text-[#fcfcfc] mt-0.5">
                    The Arabic Guide - CEO
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc] italic mt-8">
              “Excellent experience from start to finish. The project was
              delivered on time with clean design and solid functionality.
              Highly recommended for any web-related work.”
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex gap-6">
                <div>
                  <Image
                    src="/images/testimonials/AliE.webp"
                    alt="Client"
                    width={65}
                    height={65}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-[17px] md:text-[18px] font-medium text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
                    Ali Ehtisham
                  </h3>
                  <p className="font-thin leading-[1.5em] text-[14px] text-[#161616] dark:text-[#fcfcfc] mt-0.5">
                    Ali Ehtesham - CEO
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc] italic mt-8">
              “Very reliable and skilled developer. All issues were fixed
              quickly, and the site speed improved noticeably. I’m extremely
              satisfied with the quality of work delivered.”
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex gap-6">
                <div>
                  <Image
                    src="/images/testimonials/Naser.webp"
                    alt="Client"
                    width={65}
                    height={65}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-[17px] md:text-[18px] font-medium text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
                    Nasir Kashmiri
                  </h3>
                  <p className="font-thin leading-[1.5em] text-[14px] text-[#161616] dark:text-[#fcfcfc] mt-0.5">
                    Naser Al Kashmiri - CEO
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc] italic mt-8">
              “Top quality service from start to finish. The design,
              functionality, and optimization exceeded expectations. I would
              definitely work together again.”
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex gap-6">
                <div>
                  <Image
                    src="/images/testimonials/AtifS.webp"
                    alt="Client"
                    width={65}
                    height={65}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-[17px] md:text-[18px] font-medium text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
                    Atif Saeed
                  </h3>
                  <p className="font-thin leading-[1.5em] text-[14px] text-[#161616] dark:text-[#fcfcfc] mt-0.5">
                    Dev Bench - CEO
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc] italic mt-8">
              “Very reliable and skilled developer. All issues were fixed
              quickly, and the site speed improved noticeably. I’m extremely
              satisfied with the quality of work delivered.”
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex gap-6">
                <div>
                  <Image
                    src="/images/testimonials/UmarJ.webp"
                    alt="Client"
                    width={65}
                    height={65}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-[17px] md:text-[18px] font-medium text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
                    Umar Javaid
                  </h3>
                  <p className="font-thin leading-[1.5em] text-[14px] text-[#161616] dark:text-[#fcfcfc] mt-0.5">
                    Digi AI Bot - CEO
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc] italic mt-8">
              “Great experience working together. Clear understanding of
              requirements, clean code, and excellent support even after project
              completion.”
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex gap-6">
                <div>
                  <Image
                    src="/images/testimonials/Amer.webp"
                    alt="Client"
                    width={65}
                    height={65}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-[17px] md:text-[18px] font-medium text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
                    Syed Ali Aamer
                  </h3>
                  <p className="font-thin leading-[1.5em] text-[14px] text-[#161616] dark:text-[#fcfcfc] mt-0.5">
                    Ambrint - CEO
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc] italic mt-8">
              “Very reliable and skilled developer. All issues were fixed
              quickly, and the site speed improved noticeably. I’m extremely
              satisfied with the quality of work delivered.”
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex gap-6">
                <div>
                  <Image
                    src="/images/testimonials/MHasnat.webp"
                    alt="Client"
                    width={65}
                    height={65}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-[17px] md:text-[18px] font-medium text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
                    Muhammad Hasnat
                  </h3>
                  <p className="font-thin leading-[1.5em] text-[14px] text-[#161616] dark:text-[#fcfcfc] mt-0.5">
                    H2O Labs - CEO
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc] italic mt-8">
              “Highly professional and reliable developer. All requested
              features were implemented perfectly, and the overall performance
              of the site improved significantly.”
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex gap-6">
                <div>
                  <Image
                    src="/images/testimonials/AliAB.webp"
                    alt="Client"
                    width={65}
                    height={65}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-[17px] md:text-[18px] font-medium text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
                    Ali Ahmad
                  </h3>
                  <p className="font-thin leading-[1.5em] text-[14px] text-[#161616] dark:text-[#fcfcfc] mt-0.5">
                    Code Aesthetics - CEO
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc] italic mt-8">
              “Exceptional work with great attention to detail. The website is
              fast, responsive, and visually impressive. Communication was
              smooth, and everything was delivered on time.”
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/contact">
            <PrimaryButton>Contact Now</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
