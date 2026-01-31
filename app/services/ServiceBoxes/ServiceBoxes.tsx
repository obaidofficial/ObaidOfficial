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

const ServiceBoxes = () => {
  return (
    <div className="bg-[#fcfcfc] dark:bg-[#090909]">
      <div className="pt-6 md:-pt-16 w-[94%] md:w-325 mx-auto pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 mt-8">
          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group">
            <BsBrush className="w-12 h-12 text-[#161616] dark:text-[#fcfcfc] bg-[#f5f5f5] dark:bg-[#fcfcfc]/10 group-hover:text-[#fcfcfc] group-hover:bg-[#161616] dark:group-hover:text-[#161616] dark:group-hover:bg-[#fcfcfc]/90 transition-all duration-300 mb-15 p-3 rounded-lg" />
            <h3 className="text-[24px] md:text-[28px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
              Web Design
            </h3>
            <p className="font-thin leading-[1.5em] text-[16px]">
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
            <p className="font-thin leading-[1.5em] text-[16px]">
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
            <p className="font-thin leading-[1.5em] text-[16px]">
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
            <p className="font-thin leading-[1.5em] text-[16px]">
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
            <p className="font-thin leading-[1.5em] text-[16px]">
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
            <p className="font-thin leading-[1.5em] text-[16px]">
              Safe and structured website migration with no data loss or broken
              functionality. Ensures minimal downtime and a smooth transition
              between platforms or servers.
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group">
            <BsBrush className="w-12 h-12 text-[#161616] dark:text-[#fcfcfc] bg-[#f5f5f5] dark:bg-[#fcfcfc]/10 group-hover:text-[#fcfcfc] group-hover:bg-[#161616] dark:group-hover:text-[#161616] dark:group-hover:bg-[#fcfcfc]/90 transition-all duration-300 mb-15 p-3 rounded-lg" />
            <h3 className="text-[24px] md:text-[28px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
              Bug Fixing
            </h3>
            <p className="font-thin leading-[1.5em] text-[16px]">
              Thorough identification and resolution of layout, functionality,
              and code issues across all environments. Restores stability while
              preventing recurring errors and unexpected system failures.
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group">
            <BsCodeSlash className="w-12 h-12 text-[#161616] dark:text-[#fcfcfc] bg-[#f5f5f5] dark:bg-[#fcfcfc]/10 group-hover:text-[#fcfcfc] group-hover:bg-[#161616] dark:group-hover:text-[#161616] dark:group-hover:bg-[#fcfcfc]/90 transition-all duration-300 mb-15 p-3 rounded-lg" />
            <h3 className="text-[24px] md:text-[28px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
              Speed Optimization
            </h3>
            <p className="font-thin leading-[1.5em] text-[16px]">
              Advanced performance tuning to improve loading speed and
              responsiveness across all modern devices. Enhances user experience
              and boosts search engine rankings for better online visibility.
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group">
            <BsPlug className="w-12 h-12 text-[#161616] dark:text-[#fcfcfc] bg-[#f5f5f5] dark:bg-[#fcfcfc]/10 group-hover:text-[#fcfcfc] group-hover:bg-[#161616] dark:group-hover:text-[#161616] dark:group-hover:bg-[#fcfcfc]/90 transition-all duration-300 mb-15 p-3 rounded-lg" />
            <h3 className="text-[24px] md:text-[28px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
              GSAP Animation
            </h3>
            <p className="font-thin leading-[1.5em] text-[16px]">
              Smooth, engaging animations created using GSAP for modern
              interactive experiences. Optimized to enhance visuals without
              compromising performance.
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group">
            <BsCloud className="w-12 h-12 text-[#161616] dark:text-[#fcfcfc] bg-[#f5f5f5] dark:bg-[#fcfcfc]/10 group-hover:text-[#fcfcfc] group-hover:bg-[#161616] dark:group-hover:text-[#161616] dark:group-hover:bg-[#fcfcfc]/90 transition-all duration-300 mb-15 p-3 rounded-lg" />
            <h3 className="text-[24px] md:text-[28px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
              Support
            </h3>
            <p className="font-thin leading-[1.5em] text-[16px]">
              Ongoing technical support to keep your website updated and running
              smoothly without interruptions. Provides quick assistance for
              fixes, updates, and improvements whenever needed.
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group">
            <BsBag className="w-12 h-12 text-[#161616] dark:text-[#fcfcfc] bg-[#f5f5f5] dark:bg-[#fcfcfc]/10 group-hover:text-[#fcfcfc] group-hover:bg-[#161616] dark:group-hover:text-[#161616] dark:group-hover:bg-[#fcfcfc]/90 transition-all duration-300 mb-15 p-3 rounded-lg" />
            <h3 className="text-[24px] md:text-[28px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
              Gateway Integration
            </h3>
            <p className="font-thin leading-[1.5em] text-[16px]">
              Secure payment gateway setup supporting safe and reliable online
              transactions with trusted providers. Ensures smooth checkout flow
              and trusted payment processing for global customers.
            </p>
          </div>

          <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group">
            <BsDatabase className="w-12 h-12 text-[#161616] dark:text-[#fcfcfc] bg-[#f5f5f5] dark:bg-[#fcfcfc]/10 group-hover:text-[#fcfcfc] group-hover:bg-[#161616] dark:group-hover:text-[#161616] dark:group-hover:bg-[#fcfcfc]/90 transition-all duration-300 mb-15 p-3 rounded-lg" />
            <h3 className="text-[24px] md:text-[28px] font-medium mb-2 text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
              Plugin Creation
            </h3>
            <p className="font-thin leading-[1.5em] text-[16px]">
              Custom plugin development tailored to your website’s specific
              functionality needs. Built with clean, efficient code for
              flexibility and future scalability.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/contact">
            <PrimaryButton>Contact Now</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceBoxes;
