import React from "react";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

type Props = {
  reviewdata: {
    id: number;
    clientImage: string;
    name: string;
    brand: string;
    role: string;
    review: string;
  };
};

const Cards = ({ reviewdata }: Props) => {
  return (
    <div className="col-span-1 border rounded-xl border-[#747474]/20 p-6 bg-[#ffffff] dark:bg-[#161616] shadow-sm hover:shadow-lg dark:hover:shadow-[#fcfcfc]/8 dark:shadow-[#fcfcfc]/5 transition-all duration-300 group flex flex-col justify-between h-65">
      <div>
        <div className="flex gap-6">
          <div>
            <Image
              src={reviewdata.clientImage}
              alt={reviewdata.name}
              width={65}
              height={65}
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-[17px] md:text-[18px] font-medium text-[#161616] dark:text-[#fcfcfc] leading-[1.1em] tracking-[-1px]">
              {reviewdata.name}
            </h3>
            <p className="font-thin leading-[1.5em] text-[14px] text-[#161616] dark:text-[#fcfcfc] mt-0.5">
              {reviewdata.brand} - {reviewdata.role}
            </p>
            <div className="flex gap-0.5 mt-1">
              <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <BsStarFill className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            </div>
          </div>
        </div>
      </div>

      <p className="font-thin leading-[1.5em] text-[16px] text-[#161616] dark:text-[#fcfcfc] italic mt-8">
        “{reviewdata.review}”
      </p>
    </div>
  );
};

export default Cards;
