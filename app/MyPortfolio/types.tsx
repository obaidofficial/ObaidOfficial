export type Category =
  | "All"
  | "WordPress"
  | "Shopify"
  | "Square Space"
  | "Framer"
  | "WIX"
  | "Custom";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: Category;
  tags: string[];
}
