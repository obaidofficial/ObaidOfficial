import { CVData } from "./types";

export const CV_DATA: CVData = {
  name: "Alexander Rivers",
  title: "Senior Full Stack Engineer",
  email: "alex.rivers@example.com",
  location: "San Francisco, CA",
  linkedin: "linkedin.com/in/alexrivers",
  github: "github.com/arivers",
  bio: "Passionate engineer with over 8 years of experience building scalable web applications. Expert in React, Node.js, and Cloud Infrastructure. Dedicated to clean code, performance optimization, and creating exceptional user experiences.",
  experiences: [
    {
      company: "Virtual Dive Studios",
      role: "React Frontend Developer",
      period: "2025 - Present",
      description: [
        "Architected a high-performance Websites using Next.js and Tailwind CSS, reducing bundle size by 40%.",
        "Managed a team of 6 developers, meeting with Clients for transparent communication.",
        "Transform CMS based websites to Next.js and vercel configuration.",
      ],
      technologies: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind"],
      logo: "https://picsum.photos/id/1/48/48",
    },
    {
      company: "Digital Solutions",
      role: "Senior Web Developer",
      period: "2024 - 2025",
      description: [
        "Developed and maintained scalable websites using WordPress, Shopify & Framer.",
        "Collaborated with UI/UX designers to implement pixel-perfect responsive designs.",
        "Manage company websites and its core web vitals.",
      ],
      technologies: ["Node.js", "Express", "PostgreSQL", "React", "AWS"],
      logo: "https://picsum.photos/id/2/48/48",
    },
    {
      company: "Code Aesthetics",
      role: "CMS Web Developer",
      period: "2023 - 2024",
      description: [
        "Built custom WordPress themes and plugins for enterprise clients.",
        "Optimized website SEO and performance, achieving 85+ Lighthouse scores.",
        "Training juniors to enhance their development skills.",
      ],
      technologies: ["JavaScript", "Sass", "PHP", "jQuery"],
      logo: "https://picsum.photos/id/3/48/48",
    },
    {
      company: "Solutions Sector",
      role: "WordPress Web Developer",
      period: "2022 - 2023",
      description: [
        "Built responsive WordPress websites for clients.",
        "Managing in house brand & fixing bugs in website.",
        "Developing WIX, Shopify & Square Space websites. Learning GSAP animation.",
      ],
      technologies: ["JavaScript", "Sass", "PHP", "jQuery"],
      logo: "https://picsum.photos/id/3/48/48",
    },
    {
      company: "Nectarsol PTY LTD",
      role: "Junior Web Developer",
      period: "2021 - 2022",
      description: [
        "Learning web development as an Intern.",
        "Built WordPress websites for clients.",
        "Learning new skill like Photoshop & Video editing.",
      ],
      technologies: ["JavaScript", "Sass", "PHP", "jQuery"],
      logo: "https://picsum.photos/id/3/48/48",
    },
  ],
  education: [
    {
      institution: "University Of Gujrat",
      degree: "B.S. in Software Engineering",
      period: "2017 - 2022",
      gpa: "3.6/4.0",
      highlights: [
        "Specialization in Human-Computer Interaction",
        "Graduate Research Assistant",
      ],
    },
    {
      institution: "Govt. College of Science",
      degree: "FSc in Engineering",
      period: "2015 - 2017",
      highlights: ["Dean's List 2012-2014", "President of Web Dev Club"],
    },
  ],
  skillCategories: [
    {
      category: "All",
      items: [
        { name: "React / Next.js", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Bootstrap", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "WordPress", level: 95 },
        { name: "Shopify", level: 90 },
        { name: "Framer", level: 80 },
        { name: "Square Space", level: 85 },
        { name: "WIX", level: 75 },
        { name: "Photoshop", level: 80 },
      ],
    },
  ],
  projects: [
    {
      title: "Omni-Task Manager",
      description:
        "A collaborative task management application with real-time updates and integrated video conferencing.",
      tags: ["React", "Firebase", "WebRTC"],
      imageUrl: "https://picsum.photos/id/10/400/225",
    },
    {
      title: "Eco-Tracker App",
      description:
        "Visualizing personal carbon footprints through intuitive charts and gamified sustainability challenges.",
      tags: ["Next.js", "D3.js", "Prisma"],
      imageUrl: "https://picsum.photos/id/11/400/225",
    },
  ],
};
