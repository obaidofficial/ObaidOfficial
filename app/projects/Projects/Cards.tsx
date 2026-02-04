import React from "react";
import Image from "next/image";

type Props = {
  projectdata: {
    id: number;
    image: string;
    title: string;
    shortDescription: string;
  };
};

const Cards = ({ projectdata }: Props) => {
  return (
    <div className="col-span-1 border rounded-xl border-[#747474]/20 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group">
      <div>
        <div>
          <Image
            src={projectdata.image}
            alt={projectdata.title}
            width={1600}
            height={1600}
            className="rounded-t-lg"
          />
        </div>
        <div className=" px-6 py-4">
          <h3 className="text-[20px] md:text-[24px] font-medium text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
            {projectdata.title}
          </h3>
          <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc] mt-1.5">
            {projectdata.shortDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
