import React from "react";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Pricing from "./Pricing/Pricing";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";
import MyProjects from "./MyProjects/MyProjects";
import Clients from "./Clients/Clients";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutMe />
      <MyProjects />
      <Services />
      <Clients />
      {/* <Pricing /> */}
      <Testimonials />
    </div>
  );
};

export default Home;
