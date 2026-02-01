import React from "react";
import Banner from "./Banner/Banner";
import Projects from "./Projects/Projects";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Projects />
    </div>
  );
};

export default page;
