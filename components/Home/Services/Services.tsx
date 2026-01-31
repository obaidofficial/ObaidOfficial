import PrimaryButton from "@/components/Helper/PrimaryButton";
import Link from "next/link";
import React from "react";
import {
  BsBag,
  BsBrush,
  BsCloud,
  BsCodeSlash,
  BsDatabase,
  BsPlug,
} from "react-icons/bs";

const Services = () => {
  return (
    <div className="bg-[#fcfcfc] dark:bg-[#090909]">
      <div className="pt-16 w-[94%] md:w-325 mx-auto pb-16">
        <h2 className="text-[32px] md:text-[50px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px] text-center">
          My Services
        </h2>
        <p className="font-thin leading-[1.5em] text-[16px] text-center max-w-200 mx-auto">
          Crafting powerful, visually refined, and performance-driven web
          solutions for modern brands. Focused on quality, efficiency, and
          long-term success.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 mt-8">
          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group">
            <BsBrush className="w-12 h-12 text-[#161616] dark:text-[#fcfcfc] bg-[#f5f5f5] dark:bg-[#fcfcfc]/10 group-hover:text-[#fcfcfc] group-hover:bg-[#161616] dark:group-hover:text-[#161616] dark:group-hover:bg-[#fcfcfc]/90 transition-all duration-300 mb-15 p-3 rounded-lg" />
            <h3 className="text-[24px] md:text-[28px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
              Web Design
            </h3>
            <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc]">
              Modern, responsive layouts crafted with a strong focus on
              usability, branding, and visual clarity. Designed to engage users
              and deliver a seamless experience across all devices.
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group">
            <BsCodeSlash className="w-12 h-12 text-[#161616] dark:text-[#fcfcfc] bg-[#f5f5f5] dark:bg-[#fcfcfc]/10 group-hover:text-[#fcfcfc] group-hover:bg-[#161616] dark:group-hover:text-[#161616] dark:group-hover:bg-[#fcfcfc]/90 transition-all duration-300 mb-15 p-3 rounded-lg" />
            <h3 className="text-[24px] md:text-[28px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
              Web Development
            </h3>
            <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc]">
              High-quality, scalable code built for performance, security, and
              long-term maintainability. Ensures smooth functionality and a
              solid technical foundation for your website.
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group">
            <BsPlug className="w-12 h-12 text-[#161616] dark:text-[#fcfcfc] bg-[#f5f5f5] dark:bg-[#fcfcfc]/10 group-hover:text-[#fcfcfc] group-hover:bg-[#161616] dark:group-hover:text-[#161616] dark:group-hover:bg-[#fcfcfc]/90 transition-all duration-300 mb-15 p-3 rounded-lg" />
            <h3 className="text-[24px] md:text-[28px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
              Plugin Integration
            </h3>
            <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc]">
              Carefully integrated third-party plugins that enhance features
              without affecting performance. Fully tested for compatibility,
              stability, and smooth user experience.
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group">
            <BsCloud className="w-12 h-12 text-[#161616] dark:text-[#fcfcfc] bg-[#f5f5f5] dark:bg-[#fcfcfc]/10 group-hover:text-[#fcfcfc] group-hover:bg-[#161616] dark:group-hover:text-[#161616] dark:group-hover:bg-[#fcfcfc]/90 transition-all duration-300 mb-15 p-3 rounded-lg" />
            <h3 className="text-[24px] md:text-[28px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
              Hosting Setup
            </h3>
            <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc]">
              Complete hosting configuration with optimized server settings for
              speed and reliability. Ensures secure deployment, proper backups,
              and stable uptime.
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group">
            <BsBag className="w-12 h-12 text-[#161616] dark:text-[#fcfcfc] bg-[#f5f5f5] dark:bg-[#fcfcfc]/10 group-hover:text-[#fcfcfc] group-hover:bg-[#161616] dark:group-hover:text-[#161616] dark:group-hover:bg-[#fcfcfc]/90 transition-all duration-300 mb-15 p-3 rounded-lg" />
            <h3 className="text-[24px] md:text-[28px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
              Online Store
            </h3>
            <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc]">
              Professional eCommerce solutions designed to sell products
              effectively and securely. Focused on conversion, smooth checkout,
              and easy product management.
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group">
            <BsDatabase className="w-12 h-12 text-[#161616] dark:text-[#fcfcfc] bg-[#f5f5f5] dark:bg-[#fcfcfc]/10 group-hover:text-[#fcfcfc] group-hover:bg-[#161616] dark:group-hover:text-[#161616] dark:group-hover:bg-[#fcfcfc]/90 transition-all duration-300 mb-15 p-3 rounded-lg" />
            <h3 className="text-[24px] md:text-[28px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
              Migration
            </h3>
            <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc]">
              Safe and structured website migration with no data loss or broken
              functionality. Ensures minimal downtime and a smooth transition
              between platforms or servers.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/services">
            <PrimaryButton>View All Services</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
