import React, { useState } from "react";
import { NAVIGATION_DATA } from "../constants";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/Helper/PrimaryButton";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (label: string) => {
    setActiveAccordion(activeAccordion === label ? null : label);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-1600 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-[#fcfcfc] dark:bg-[#161616] z-1700 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="transition-all duration-200">
              <p className="font-bold text-[#161616] dark:text-[#fcfcfc] text-3xl tracking-[-2px]">
                Obaid.
              </p>
            </Link>
            <button
              onClick={onClose}
              className="p-2 text-[#161616] dark:text-[#fcfcfc] rounded-full transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="grow space-y-4">
            {NAVIGATION_DATA.map((item) => (
              <div key={item.label}>
                {item.megaMenu ? (
                  <div>
                    <button
                      onClick={() => toggleAccordion(item.label)}
                      className="w-full flex items-center justify-between py-3 text-lg font-normal text-[#161616] border-b border-gray-200 dark:text-[#fcfcfc] dark:border-[#747474]/50"
                    >
                      {item.label}
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          activeAccordion === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeAccordion === item.label
                          ? "max-h-400 py-4"
                          : "max-h-0"
                      }`}
                    >
                      {item.megaMenu.columns.map((col, cIdx) => (
                        <div key={cIdx} className="mb-4 pl-4">
                          <h4 className="text-xs font-bold text-[#4941e4] uppercase mb-2">
                            {col.title}
                          </h4>
                          <ul className="space-y-2">
                            {col.items.map((sub, sIdx) => (
                              <li key={sIdx}>
                                <a
                                  href={sub.href}
                                  className="text-[#161616] dark:text-[#fcfcfc] hover:text-black dark:hover:text-white py-1 block"
                                  onClick={onClose}
                                >
                                  {sub.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block py-3 text-lg font-normal text-[#161616] dark:text-[#fcfcfc] border-b border-gray-200 dark:border-[#747474]/50"
                    onClick={onClose}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-8 space-y-3">
            <Link href="/contact" className="w-full flex flex-col">
              <PrimaryButton>Hire Me Now</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
