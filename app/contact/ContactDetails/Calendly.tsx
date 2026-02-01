"use client";
import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div>
      <div className="Calendly hidden dark:block">
        <InlineWidget url="https://calendly.com/itsobaidofficial/30min?background_color=161616&text_color=fcfcfc" />
      </div>
      <div className="Calendly block dark:hidden">
        <InlineWidget url="https://calendly.com/itsobaidofficial/30min?background_color=ffffff&text_color=161616" />
      </div>
    </div>
  );
};

export default Calendly;
