import PrimaryButton from "@/components/Helper/PrimaryButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cards from "./Cards";
import { BsStarFill } from "react-icons/bs";
import { reviewDetails } from "./constants";

const ClientReviews = () => {
  return (
    <div className="bg-[#fcfcfc] dark:bg-[#090909]">
      <div className="pt-6 md:pt-16 w-[94%] md:w-325 mx-auto pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 mt-8">
          {reviewDetails.map((reviewdata) => {
            return (
              <div key={reviewdata.id}>
                <Cards reviewdata={reviewdata} />
              </div>
            );
          })}
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

export default ClientReviews;
