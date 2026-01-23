"use client";
import PrimaryButton from "@/components/Helper/PrimaryButton";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[70vh] sm:h-screen">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full  bg-[radial-gradient(50%_50%_at_50%_50%,#fff0_0%,#fff_100%)] dark:bg-[radial-gradient(50%_50%_at_50%_50%,#0000_0%,#000_100%)] z-1"></div>

      {/* Video */}
      <video
        src="/images/hero/bg.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover invert-100 grayscale-100 dark:invert-0 dark:grayscale-75"
      />

      {/* Text Content */}
      <div className="absolute z-100 w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div className="md:w-[88%] w-[92%]">
            <h1 className="text-[28px] mb-4 md:mb-3 lg:text-[80px] leading-[1em] text-black dark:text-white font-semibold uppercase">
              Coding the{" "}
              <span className="text-[#4941e4] font-black">Future</span> <br />
              Designing the <br />
              Experience
            </h1>
            <p className="text-[14px] mb-4 md:mb-6 w-full lg:w-190 lg:text-[22px] leading-[1.3em] text-black dark:text-white font-light">
              Design isn’t just about how something looks, it’s about how it
              works. A beautiful interface means nothing if it doesn’t serve the
              user. Every element has a reason to be there, working together to
              guide the user, tell a story, and achieve a goal.
            </p>
            <PrimaryButton>Veiw Projects</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
