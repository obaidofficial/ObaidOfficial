"use client";
import PrimaryButton from "@/components/Helper/PrimaryButton";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[70vh] sm:h-screen">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-bottom bg-no-repeat bg-[url('/images/hero/hero-bg.webp')] z-1 opacity-40"></div>

      {/* Video */}
      {/* <video
        src="/images/hero/hero-video.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      /> */}

      {/* Text Content */}
      <div className="absolute z-100 w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div className="md:w-[88%] w-[92%]">
            <h1 className="text-[28px] mb-4 md:mb-3 lg:text-[80px] leading-[1.1em] tracking-[0px] text-black font-normal uppercase">
              Coding the{" "}
              <span className="text-blue-500 font-medium italic">Future</span>{" "}
              <br />
              Designing the <br />
              Experience
            </h1>
            <p className="text-[14px] mb-4 md:mb-6 w-full lg:w-190 lg:text-[24px] leading-[1.5em] text-black font-light">
              Design isn’t just about how something looks, it’s about how it
              works. A beautiful interface means nothing if it doesn’t serve the
              user. Every element has a reason to be there, working together to
              guide the user, tell a story, and achieve a goal.
            </p>
            <PrimaryButton>Veiw Portfolio</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
