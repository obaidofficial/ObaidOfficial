import PrimaryButton from "@/components/Helper/PrimaryButton";
import SecondaryButton from "@/components/Helper/SecondaryButton";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full md:h-[98vh] h-[88vh] sm:h-screen bg-[url('/images/hero/heroLight.webp')] dark:bg-[url('/images/hero/heroDark.webp')] bg-cover bg-no-repeat bg-center">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full  bg-[radial-gradient(50%_50%_at_50%_50%,#fff0_0%,#fcfcfc_100%)] dark:bg-[radial-gradient(50%_50%_at_50%_50%,#0000_0%,#090909_100%)] "></div>
      {/* Text Content */}
      <div className="absolute z-100 w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div className="md:w-325 w-[92%] text-center mx-auto">
            <h1 className="text-[42px] mb-4 md:mb-5 lg:text-[80px] leading-[1.1em] text-[#161616] dark:text-[#fcfcfc] font-medium tracking-[-2px] uppercase">
              Turning Ideas Into Powerful Digital Products
            </h1>
            <p className="text-[18px] mb-4 md:mb-7 w-full md:w-250 lg:text-[22px] leading-[1.5em] text-[#161616] dark:text-[#fcfcfc] mx-auto font-thin">
              Design isn’t just about how something looks, it’s about how it
              works. A beautiful interface means nothing if it doesn’t serve the
              user. Every element has a reason to be there, working together to
              guide the user, tell a story, and achieve a goal.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/projects">
                <PrimaryButton>Veiw Projects</PrimaryButton>
              </Link>
              <Link href="/contact">
                <SecondaryButton>Contact Me</SecondaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
