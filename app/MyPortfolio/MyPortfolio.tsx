"use client";
import React, { useState, useMemo } from "react";
import { CATEGORIES, PROJECTS } from "./constants";
import { Category } from "./types";
import PortfolioCard from "./PortfolioCard";
import PrimaryButton from "@/components/Helper/PrimaryButton";
import Link from "next/link";

const MyPortfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>("WordPress");

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <div className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-[#fcfcfc] dark:bg-[#090909]">
      <div className="pt-6 md:pt-16 w-[94%] md:w-325 mx-auto pb-16">
        {/* Tabs Controller */}
        <div className="flex justify-between">
          <div className="max-w-fit mb-12 pt-1.5 pb-1.5 px-2 bg-gray-200 dark:bg-[#161616] rounded-xl border border-[#747474]/20 flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`
              px-3 py-1.5 rounded-lg text-[12px] outline-none font-medium tracking-[0.17px] transition-all duration-300 cursor-pointer mx-auto 
              ${
                activeTab === category
                  ? "bg-[#161616] text-[#fcfcfc] dark:text-[#161616] transition-all duration-200 shadow-[inset_0_1px_8px_#ffffff4d,0_0_0_1px_#161616,0_0_0_1px_#161616,inset_0_0_0_1.5px_#ffffff4d,0_2px_2px_#ffffff4d] dark:[box-shadow:0_1px_8px_0_#fff3_inset,0_0_0_1px_#e4e4e4,0_0_0_1px_#e4e4e4,0_0_0_1.5px_#ffffff4d_inset,0_2px_2px_0_#0003] dark:bg-[#e4e4e4]"
                  : "text-[#161616] dark:text-[#fcfcfc] hover:text-[#fcfcfc] hover:bg-[#161616] dark:hover:bg-[#f5f5f5] dark:hover:text-[#161616]"
              }
            `}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-0.5 text-right hidden lg:block">
            <Link href="/contact">
              <PrimaryButton>Contact Me</PrimaryButton>
            </Link>
          </div>
        </div>

        {/* Portfolios Grid */}
        <main className="max-w-400 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PortfolioCard project={project} />
              </div>
            ))}

            {/* Edge case: Empty state (though not possible with current constants) */}
            {filteredProjects.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="text-[#161616] dark:text-[#fcfcfc] italic">
                  Coming Soon...
                </p>
              </div>
            )}
          </div>
        </main>

        <div className="mt-8 text-center lg:hidden">
          <Link href="/contact">
            <PrimaryButton>Contact Me</PrimaryButton>
          </Link>
        </div>

        {/* Tailwind specific standard animations inject */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-bottom-4 { from { transform: translateY(1rem); } to { transform: translateY(0); } }
        .animate-in { animation: fade-in 0.5s ease-out, slide-in-from-bottom-4 0.5s ease-out; }
      `,
          }}
        />
      </div>
    </div>
  );
};

export default MyPortfolio;
