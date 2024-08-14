import React from "react";
import DevelopmentSummary from "./DevelopmentSummary";
import SocialIcons from "./SocialIcons";

const About: React.FC = () => {
  return (
    <section className="container mt-3">
      <div className="bg-gradient-navbar rounded-lg p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-bold mb-2 text-white">About</h2>
          <button className="px-6 py-1 bg-indigo-300 text-sm rounded-xl">
            View Map
          </button>
        </div>

        <p className="text-white text-sm font-light leading-normal">
          Extending growth and dynamism in the South, a thriving estate spurs
          active and living wellness with distinct recreation and lifestyle
          destinations, interconnected verdant parks, and outdoor retail spaces.
          The Courtyards opens a private sanctuary celebrating a magnified
          experience of living with an abundance of possibilities and
          conveniences.
        </p>
        <div className="flex items-center justify-between">
          <DevelopmentSummary />
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default About;
