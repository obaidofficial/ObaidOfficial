import React from "react";
type Props = {
  children: React.ReactNode;
};

const PrimaryButton = ({ children }: Props) => {
  return (
    <button className="px-4.5 py-2 text-white text-base transition-all duration-200 rounded-lg cursor-pointer bg-blue-500 group border-2 border-blue-500">
      {children}{" "}
      <span className="pl-2 pr-1 group-hover:pl-3 group-hover:pr-0 transition-all duration-150">
        ⇢
      </span>
    </button>
  );
};

export default PrimaryButton;
