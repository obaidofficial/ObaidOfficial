import React from "react";
import Banner from "./Banner/Banner";
import AboutMyself from "./AboutMyself/AboutMyself";
import Clients from "@/components/Home/Clients/Clients";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import CV from "./CV/CV";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <AboutMyself />
      <CV />
      <Clients />
      <Testimonials />
    </div>
  );
};

export default page;
