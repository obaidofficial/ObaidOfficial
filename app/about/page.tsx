import React from "react";
import Banner from "./Banner/Banner";
import AboutMyself from "./AboutMyself/AboutMyself";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <AboutMyself />
    </div>
  );
};

export default page;
