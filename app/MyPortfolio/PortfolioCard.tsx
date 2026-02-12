import React from "react";
import { Project } from "./types";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative flex flex-col border rounded-xl border-[#747474]/20 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 overflow-hidden">
      {/* <Link href={`portfolio/${project.link}`}> */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
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
          {project.title}
        </h3>
        <p className="text-[#161616] dark:text-[#fcfcfc] font-thin text-sm leading-relaxed grow">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
