import React from "react";
import Banner from "./Banner/Banner";
// import Projects from "./Projects/Projects";
import MyPortfolio from "../MyPortfolio/MyPortfolio";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      {/* <Projects /> */}
      <MyPortfolio />
    </div>
  );
};

export default page;
