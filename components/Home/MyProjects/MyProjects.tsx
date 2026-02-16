import PrimaryButton from "@/components/Helper/PrimaryButton";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const MyProjects = () => {
  return (
    <div className="bg-[#fcfcfc] dark:bg-[#090909]">
      <div className="pt-8 w-[94%] md:w-325 mx-auto pb-8">
        <h2 className="text-[32px] md:text-[50px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px] text-center">
          My Projects
        </h2>
        <p className="font-thin leading-[1.5em] text-[16px] text-center max-w-200 mx-auto">
          Carefully crafted projects that highlight my experience and technical
          expertise. From concept to completion, each build is designed for
          impact.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 mt-8">
          <div className="group relative flex flex-col border rounded-xl border-[#747474]/20 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 overflow-hidden">
            {/* <Link href={`portfolio/${project.link}`}> */}
            <div className="relative h-64 overflow-hidden">
              <img
                src="/images/projects/h2o.webp"
                alt="H2O Labs"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md px-2 py-1 rounded">
                    Elementor
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md px-2 py-1 rounded">
                    Elementor Pro
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md px-2 py-1 rounded">
                    CF7
                  </span>
                </div>
              </div>
            </div>
            {/* </Link> */}

            <div className="p-6 flex flex-col grow">
              {/* <div className="mb-2">
          <span className="text-xs font-bold text-[#ef41de] uppercase tracking-widest">
            {project.category}
          </span>
        </div> */}
              <h3 className="text-xl font-medium text-[#161616] dark:text-[#fcfcfc] mb-2">
                H2O Labs
              </h3>
              <p className="text-[#161616] dark:text-[#fcfcfc] font-thin text-sm leading-relaxed grow">
                A global leader in AI, Data Industry, Cloud Technologies, and
                Process Automation, delivering powerful solutions.
              </p>
            </div>
          </div>

          <div className="group relative flex flex-col border rounded-xl border-[#747474]/20 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 overflow-hidden">
            {/* <Link href={`portfolio/${project.link}`}> */}
            <div className="relative h-64 overflow-hidden">
              <img
                src="/images/projects/verticle.webp"
                alt="The Verticle"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md px-2 py-1 rounded">
                    Framer
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md px-2 py-1 rounded">
                    Workspace
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md px-2 py-1 rounded">
                    Landing
                  </span>
                </div>
              </div>
            </div>
            {/* </Link> */}

            <div className="p-6 flex flex-col grow">
              {/* <div className="mb-2">
          <span className="text-xs font-bold text-[#ef41de] uppercase tracking-widest">
            {project.category}
          </span>
        </div> */}
              <h3 className="text-xl font-medium text-[#161616] dark:text-[#fcfcfc] mb-2">
                The Verticle
              </h3>
              <p className="text-[#161616] dark:text-[#fcfcfc] font-thin text-sm leading-relaxed grow">
                The Vertical specialize in crafting modern buildings that
                elevate the skyline and enhance the communities.
              </p>
            </div>
          </div>

          <div className="group relative flex flex-col border rounded-xl border-[#747474]/20 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 overflow-hidden">
            {/* <Link href={`portfolio/${project.link}`}> */}
            <div className="relative h-64 overflow-hidden">
              <img
                src="/images/projects/BArtisanal.webp"
                alt="Bakhshi Artisanal"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md px-2 py-1 rounded">
                    Liquid
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md px-2 py-1 rounded">
                    Dawn
                  </span>
                </div>
              </div>
            </div>
            {/* </Link> */}

            <div className="p-6 flex flex-col grow">
              {/* <div className="mb-2">
          <span className="text-xs font-bold text-[#ef41de] uppercase tracking-widest">
            {project.category}
          </span>
        </div> */}
              <h3 className="text-xl font-medium text-[#161616] dark:text-[#fcfcfc] mb-2">
                Bakhshi Artisanal
              </h3>
              <p className="text-[#161616] dark:text-[#fcfcfc] font-thin text-sm leading-relaxed grow">
                A Shopify Store, that sell winter garments like Hoodies, Coat &
                Jackets.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects">
            <PrimaryButton>View All Projects</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
