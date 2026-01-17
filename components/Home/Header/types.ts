// Add React import to provide access to the 'React' namespace for ReactNode
import React from "react";

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface MegaMenuColumn {
  title?: string;
  items: NavItem[];
}

export interface MegaMenuData {
  layout?: "grid" | "featured" | "split" | "icons";
  columns: MegaMenuColumn[];
  featured?: {
    title: string;
    description: string;
    image: string;
    numbercta: string;
    numberhref: string;
    mailcta: string;
    mailhref: string;
  };
}

export interface MainNavItem {
  label: string;
  href: string;
  megaMenu?: MegaMenuData;
}
