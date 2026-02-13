import React from "react";
import { Experience } from "../types";

interface Props {
  experiences: Experience[];
}

const ExperienceList: React.FC<Props> = ({ experiences }) => {
  return (
    <div className="space-y-12">
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gray-200 dark:before:bg-[#747474]/50 last:before:hidden"
        >
          <div className="absolute -left-1.25 top-2 w-3 h-3 rounded-full bg-[#161616] dark:bg-[#f5f5f5] border-2 border-gray-200 dark:border-[#747474]/50"></div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex items-center gap-4">
              {/* {exp.logo && (
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-12 h-12 rounded-lg bg-slate-100 p-1"
                />
              )} */}
              <div>
                <h3 className="text-xl font-bold text-[#161616] dark:text-[#fcfcfc]">
                  {exp.role}
                </h3>
                <p className="text-[#161616]/80 dark:text-[#fcfcfc]/80 font-semibold">
                  {exp.company}
                </p>
              </div>
            </div>
            <span className="mt-2 md:mt-1 inline-flex px-3 py-1 bg-slate-100 text-slate-600 dark:bg-[#ffffff26] dark:text-[#fcfcfc]/80 rounded-md text-sm">
              {exp.period}
            </span>
          </div>

          <ul className="space-y-2 mb-4">
            {exp.description.map((item, i) => (
              <li
                key={i}
                className="text-slate-600 dark:text-[#fcfcfc]/60 flex items-start font-thin"
              >
                <span className="text-[#161616]/70 dark:text-[#fcfcfc]/40 mr-2 mt-2.25 shrink-0 w-1.5 h-1.5 rounded-full bg-current"></span>
                {item}
              </li>
            ))}
          </ul>

          {/* <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
