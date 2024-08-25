import React from "react";
import DevelopmentSummary from "./DevelopmentSummary";
import SocialIcons from "../../ui/Icons/SocialIcons";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section>
      <div className="bg-gradient-navbar rounded-lg p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-bold text-white">About</h2>
          <button className="max-w-[165px] mt-3">
            <Image
              src="/images/view-map.png"
              width={500}
              height={500}
              alt="inquire-button"
              className="w-full"
            />
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
        <DevelopmentSummary />
      </div>
    </section>
  );
};

export default About;
