import React from "react";
import Banner from "./Banner/Banner";
import ServiceBoxes from "./ServiceBoxes/ServiceBoxes";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <ServiceBoxes />
    </div>
  );
};

export default page;
