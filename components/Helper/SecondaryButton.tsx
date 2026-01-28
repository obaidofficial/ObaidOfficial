import React from "react";
type Props = {
  children: React.ReactNode;
};

const SecondaryButton = ({ children }: Props) => {
  return (
    <button className="px-6 h-10 text-[#161616] dark:text-[#fcfcfc] font-medium transition-all duration-200 rounded-lg outline-none text-sm cursor-pointer bg-[#f5f5f5] dark:bg-[#262626] group shadow-sm">
      {children}{" "}
      {/* <span className="pl-2 pr-1 group-hover:pl-3 group-hover:pr-0 transition-all duration-150">
          ⇢
      </span> */}
    </button>
  );
};

export default SecondaryButton;
