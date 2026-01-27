import React from "react";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutMe />
    </div>
  );
};

export default Home;
