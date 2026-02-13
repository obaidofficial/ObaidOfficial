export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  logo?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  highlights?: string[];
}

export interface SkillCategory {
  category: string;
  items: { name: string; level: number }[];
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  tags: string[];
  imageUrl: string;
}

export interface CVData {
  name: string;
  title: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  bio: string;
  experiences: Experience[];
  education: Education[];
  skillCategories: SkillCategory[];
  projects: Project[];
}
