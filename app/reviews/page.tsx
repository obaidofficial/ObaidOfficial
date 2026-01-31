import React from "react";
import Banner from "./Banner/Banner";
import ClientReviews from "./ClentReviews/ClientReviews";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <ClientReviews />
    </div>
  );
};

export default page;
