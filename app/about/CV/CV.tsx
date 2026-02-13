import React from "react";
import ExperienceList from "./components/ExperienceList";
import SkillsSidebar from "./components/SkillsSidebar";
import { CV_DATA } from "./constants";

const CV: React.FC = () => {
  return (
    <div className="pt-6 pb-20 bg-[#fcfcfc] dark:bg-[#090909]">
      <main className="w-[94%] md:w-325 mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Content */}
        <div className="lg:col-span-8 space-y-16">
          {/* Work Experience */}
          <section>
            <h2 className="text-2xl font-bold text-[#161616] dark:text-[#fcfcfc] mb-8 flex items-center">
              <span className="w-8 h-8 bg-slate-100 text-[#161616] dark:bg-[#ffffff26] dark:text-[#fcfcfc] rounded-md flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              Work Experience
            </h2>
            <ExperienceList experiences={CV_DATA.experiences} />
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4">
          <div>
            <SkillsSidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CV;
