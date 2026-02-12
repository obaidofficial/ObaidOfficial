import { Project, Category } from "./types";

export const PROJECTS: Project[] = [
  // WordPress
  {
    id: "wordpress6",
    title: "The Arabic Guide",
    description:
      "A LMS website, Using WordPress CMS to Deliver the Arabic Lectures to understand Holy Quran.",
    image: "/images/projects/TAG.webp",
    category: "WordPress",
    tags: ["Elementor", "Woo Commerce", "Tutor LMS"],
  },
  {
    id: "wordpress5",
    title: "Look At Me Marketing",
    description:
      "A Digital Marketing Agency, provides Services like Web Development, Marketing and much more.",
    image: "/images/projects/LAM.webp",
    category: "WordPress",
    tags: ["Elementor", "WP Forms"],
  },
  {
    id: "wordpress4",
    title: "Naser Al Kashmiri",
    description:
      "A LMS website, to Deliver the Translation of The Quran to understand main purose of Holy Quran.",
    image: "/images/projects/NAK.webp",
    category: "WordPress",
    tags: ["Elementor", "Woo Commerce", "Tutor LMS"],
  },
  {
    id: "wordpress3",
    title: "Candy 'n Art",
    description:
      "A Shopify Store, that sell garments like Hoodies, T-Shirts, Trousers and much more.",
    image: "/images/projects/CnA.webp",
    category: "WordPress",
    tags: ["Elementor", "WP Forms", "Elementor Pro"],
  },
  {
    id: "wordpress2",
    title: "Digital One Marketing",
    description:
      "A marketing website that provides Web Development, Marketing and more services.",
    image: "/images/projects/DoM.webp",
    category: "WordPress",
    tags: ["Elementor", "CPT", "ACF", "Elementor Pro"],
  },
  {
    id: "wordpress1",
    title: "Humming Bird",
    description:
      "A Child Care Center, provide safe & supportive environment ensures each child feels valued.",
    image: "/images/projects/HBE.webp",
    category: "WordPress",
    tags: ["Elementor", "WP Forms"],
  },

  // Shopify
  {
    id: "shopify3",
    title: "Wear To Fit",
    description:
      "A Shopify Store, that sell garments like Hoodies, T-Shirts, Trousers and much more.",
    image: "/images/projects/WTF.webp",
    category: "Shopify",
    tags: ["Liquid", "Dawn"],
  },
  {
    id: "shopify2",
    title: "Bakhshi Artisanal",
    description:
      "A Shopify Store, that sell winter garments like Hoodies, Coat & Jackets.",
    image: "/images/projects/BArtisanal.webp",
    category: "Shopify",
    tags: ["Liquid", "Dawn"],
  },
  {
    id: "shopify1",
    title: "Premium Elora",
    description:
      "A Shopify Store, that sell only Premium garments for female & their Accessories.",
    image: "/images/projects/PElora.webp",
    category: "Shopify",
    tags: ["Liquid", "Dawn"],
  },

  // Square Space
  {
    id: "squarespace3",
    title: "Super Natural",
    description:
      "A Brand that provides Food colors, taste and much more ingredients to enhance your meal in home and events.",
    image: "/images/projects/sn.webp",
    category: "Square Space",
    tags: ["Square Space", "CSS", "HTML"],
  },
  {
    id: "squarespace2",
    title: "Fat Choy",
    description:
      "A restaurant in New York, that provides Chinese dishes as well as Veg to maintain customer's health.",
    image: "/images/projects/fat.webp",
    category: "Square Space",
    tags: ["Square Space", "CSS", "HTML"],
  },
  {
    id: "squarespace1",
    title: "Jones BBQ",
    description:
      "From housemade sausages to racks of ribs, Jones BBQ love to feed their Kansas City community.",
    image: "/images/projects/jones.webp",
    category: "Square Space",
    tags: ["Square Space", "CSS", "HTML"],
  },

  // Framer
  {
    id: "framer1",
    title: "The Verticle",
    description:
      "The Vertical specialize in crafting modern buildings that elevate the skyline and enhance the communities.",
    image: "/images/projects/verticle.webp",
    category: "Framer",
    tags: ["Framer", "Workspace", "Landing"],
  },

  // Custom
  {
    id: "custom1",
    title: "Jaweb",
    description:
      "Jaweb is an AI that sells your products, answers customers instantly, and books meetings.",
    image: "/images/projects/Jaweb.webp",
    category: "Custom",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
];

// Correctly importing and using Category type from types.ts
export const CATEGORIES: Category[] = [
  "WordPress",
  "Shopify",
  "Square Space",
  "Framer",
  "WIX",
  "Custom",
];
