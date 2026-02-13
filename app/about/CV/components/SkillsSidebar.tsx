import React from "react";
import { CV_DATA } from "../constants";

const SkillsSidebar: React.FC = () => {
  return (
    <aside className="space-y-10">
      <section>
        <h2 className="text-lg font-bold text-[#161616] dark:text-[#fcfcfc] mb-6 pb-2 border-b border-gray-200 dark:border-[#747474]/50">
          Skills
        </h2>
        <div className="space-y-8">
          {CV_DATA.skillCategories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold text-slate-500  uppercase tracking-tighter mb-4">
                {/* {cat.category} */}
              </h3>
              <div className="space-y-4">
                {cat.items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-slate-700 dark:text-[#fcfcfc]/80">
                        {skill.name}
                      </span>
                      <span className="text-slate-400 dark:text-[#fcfcfc]/40">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-[#ffffff26] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#161616] dark:bg-[#fcfcfc] h-full rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#161616] dark:text-[#fcfcfc] mb-6 pb-2 border-b border-gray-200 dark:border-[#747474]/50">
          Education
        </h2>
        <div className="space-y-6">
          {CV_DATA.education.map((edu, idx) => (
            <div key={idx} className="group">
              <h3 className="font-bold text-[#161616] dark:text-[#fcfcfc] transition-colors">
                {edu.institution}
              </h3>
              <p className="text-sm text-slate-600 dark:text-[#fcfcfc]/80">
                {edu.degree}
              </p>
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs font-medium text-slate-400 dark:text-[#fcfcfc]/60">
                  {edu.period}
                </span>
                {edu.gpa && (
                  <span className="text-xs bg-slate-100 text-slate-600 dark:bg-[#ffffff26] dark:text-[#fcfcfc]/80 px-2 py-0.5 rounded">
                    CGPA: {edu.gpa}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default SkillsSidebar;
