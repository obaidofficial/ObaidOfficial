import React from "react";
import Banner from "./Banner/Banner";
import ContactDetails from "./ContactDetails/ContactDetails";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <ContactDetails />
    </div>
  );
};

export default page;
