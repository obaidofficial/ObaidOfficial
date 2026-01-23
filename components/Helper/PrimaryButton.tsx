import React from "react";
type Props = {
  children: React.ReactNode;
};

const PrimaryButton = ({ children }: Props) => {
  return (
    <button className="px-4.5 py-2 text-white text-base transition-all duration-200 rounded-lg cursor-pointer bg-[#4941e4] hover:bg-[#360c99] group border-2 border-[#4941e4] hover:border-[#360c99]">
      {children}{" "}
      <span className="pl-2 pr-1 group-hover:pl-3 group-hover:pr-0 transition-all duration-150">
        ⇢
      </span>
    </button>
  );
};

export default PrimaryButton;
