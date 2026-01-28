import React from "react";
type Props = {
  children: React.ReactNode;
};

const PrimaryButton = ({ children }: Props) => {
  return (
    <button className="px-5 py-2.25 text-[#fcfcfc] dark:text-[#161616] font-medium transition-all duration-200 rounded-lg outline-none text-sm cursor-pointer bg-[#161616] dark:bg-[#e4e4e4] group shadow-[inset_0_1px_8px_#ffffff4d,0_0_0_1px_#161616,0_0_0_1px_#161616,inset_0_0_0_1.5px_#ffffff4d,0_2px_2px_#ffffff4d] dark:[box-shadow:0_1px_8px_0_#fff3_inset,0_0_0_1px_#e4e4e4,0_0_0_1px_#e4e4e4,0_0_0_1.5px_#ffffff4d_inset,0_2px_2px_0_#0003]">
      {children}{" "}
      {/* <span className="pl-2 pr-1 group-hover:pl-3 group-hover:pr-0 transition-all duration-150">
          ⇢
      </span> */}
    </button>
  );
};

export default PrimaryButton;
