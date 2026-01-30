import React from "react";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Pricing from "./Pricing/Pricing";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutMe />
      <Pricing />
    </div>
  );
};

export default Home;
