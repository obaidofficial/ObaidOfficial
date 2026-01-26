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
        className={`fixed top-0 right-0 w-80 h-full bg-white dark:bg-slate-900 z-1700 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="transition-all duration-200">
              <Image
                src="/images/obaidLogo.webp"
                alt="Virtual Dive Studio Logo"
                width={100}
                height={60}
                className="brightness-0 dark:invert-100"
              />
            </Link>
            <button
              onClick={onClose}
              className="p-2 text-black dark:text-white rounded-full transition-colors"
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
                      className="w-full flex items-center justify-between py-3 text-lg font-normal text-black border-b border-black/10 dark:text-white dark:border-white/10"
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
                                  className="text-black dark:text-white hover:text-[#4941e4] py-1 block"
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
                    className="block py-3 text-lg font-normal text-black dark:text-white border-b border-black/10 dark:border-white/10"
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
