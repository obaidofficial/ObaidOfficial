import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full md:h-[40vh] h-[40vh] sm:h-[40vh] bg-[url('/images/hero/heroLight.webp')] dark:bg-[url('/images/hero/heroDark.webp')] bg-cover bg-no-repeat bg-center">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full  bg-[radial-gradient(50%_50%_at_50%_50%,#fff0_0%,#fcfcfc_100%)] dark:bg-[radial-gradient(50%_50%_at_50%_50%,#0000_0%,#090909_100%)] "></div>
      {/* Text Content */}
      <div className="absolute z-100 w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div className="md:w-325 w-[92%] text-center mx-auto">
            <h1 className="text-[42px] mb-4 md:mb-5 lg:text-[50px] leading-[1.1em] text-[#161616] dark:text-[#fcfcfc] font-medium tracking-[-2px]">
              My Services
            </h1>
            <p className="text-[15px] mb-4 md:mb-7 max-w-180 lg:text-[18px] leading-[1.5em] text-[#161616] dark:text-[#fcfcfc] mx-auto font-thin">
              Crafting powerful, visually refined, and performance-driven web
              solutions for modern brands. Focused on quality, efficiency, and
              long-term success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
