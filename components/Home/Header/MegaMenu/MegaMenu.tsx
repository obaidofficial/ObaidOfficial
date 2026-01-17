import React from "react";
import { MegaMenuData } from "../types";
import Link from "next/link";

interface MegaMenuProps {
  data: MegaMenuData;
  isOpen: boolean;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ data, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 top-full w-full z-50 animate-in fade-in slide-in-from-top-1 duration-300 shadow-2xl bg-[#320127] border-t border-[#ffffff]/20"
      style={{ pointerEvents: "auto" }}
    >
      <div className="max-w-425 mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Navigation Grid Area */}
          <div
            className={`${data.featured ? "lg:col-span-8" : "lg:col-span-12"}`}
          >
            <div
              className={`grid gap-x-16 gap-y-12 ${
                data.columns.length > 1 ? "sm:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {data.columns.map((column, idx) => (
                <div key={idx} className="space-y-6">
                  {column.title && (
                    <h3 className="text-[12px] font-bold text-[#ef41de] uppercase tracking-[0.17px]">
                      {column.title}
                    </h3>
                  )}
                  <ul className="grid gap-8">
                    {column.items.map((item, iIdx) => (
                      <li key={iIdx}>
                        <Link
                          href={item.href}
                          className="group flex items-start gap-5 p-2 -my-3.5 rounded-md hover:bg-[#ffffff]/10 transition-all duration-300"
                        >
                          {item.icon && (
                            <div className="shrink-0 w-12 h-12 text-[32px] flex items-center justify-center rounded-lg bg-white text-[#ef41de] group-hover:text-white group-hover:bg-[#ef41de] transition-all duration-300 shadow-sm">
                              {item.icon}
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="text-[16px] font-light text-white transition-colors leading-tight">
                              {item.label}
                            </div>
                            {item.description && (
                              <p className="text-[14px] text-white mt-1.5 leading-relaxed opacity-80 font-light">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Highlight Section */}
          {data.featured && (
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#ffffff]/20 pt-12 lg:pt-0 lg:pl-16">
              <div className="flex flex-col h-full">
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-lg mb-8 shadow-lg ring-2 ring-[#ef41de]">
                    <img
                      src={data.featured.image}
                      alt={data.featured.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[0.17px] text-white mb-3 group-hover:text-[#ef41de] transition-colors">
                    {data.featured.title}
                  </h3>
                  <p className="text-[15px] text-white/80 mb-8 leading-relaxed font-light tracking-[0.17px]">
                    {data.featured.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    <p>
                      <Link
                        href={data.featured.numberhref}
                        className="inline-flex items-center text-[16px] font-normal tracking-[0.17px] text-white hover:text-[#ef41de] transition-colors group/link"
                      >
                        {data.featured.numbercta}
                        <svg
                          className="ml-3 w-5 h-5 transform group-hover/link:translate-x-2 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </p>
                    <p>
                      <Link
                        href={data.featured.mailhref}
                        className="inline-flex items-center text-[16px] font-normal tracking-[0.17px] text-white hover:text-[#ef41de] transition-colors group/link"
                      >
                        {data.featured.mailcta}
                        <svg
                          className="ml-3 w-5 h-5 transform group-hover/link:translate-x-2 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
