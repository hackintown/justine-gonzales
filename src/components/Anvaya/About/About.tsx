import React from "react";
import DevelopmentSummary from "./DevelopmentSummary";
import SocialIcons from "../../ui/Icons/SocialIcons";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import inquireBtn from "../../../../public/images/inquire-btn.webp";
import viewMapBtn from "../../../../public/images/view-map.webp";

interface AboutProps {
  location: string;
  setLocation: (location: string) => void;
  handleInquiryClick: () => void;
}

const About: React.FC<AboutProps> = ({
  location,
  setLocation,
  handleInquiryClick,
}) => {
  return (
    <section className="md:grid md:grid-cols-[45%_1fr] md:items-center md:gap-3">
      <div className="hidden w-full md:block">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl lg:text-3xl font-bold text-white">Anvaya Cove</h1>
          <button
            className="max-w-[110px] lg:max-w-[130px]"
            onClick={handleInquiryClick}
          >
            <Image
              src={inquireBtn}
              width={500}
              height={500}
              alt="inquire-button"
              className="w-full"
            />
          </button>
        </div>

        <p className="flex items-center space-x-2 border-2 mt-2 mb-2 md:mb-4 border-white px-2 py-2 rounded-xl">
          <IoLocationOutline className="text-white size-5" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent text-white font-light outline-none w-full h-3"
          />
        </p>
        <div className="flex justify-between items-center mb-3 md:mb-2">
          <h2 className="text-2xl lg:text-3xl font-bold text-white">About</h2>
          <button className="max-w-[110px] lg:max-w-[140px]">
            <Image
              src={viewMapBtn}
              width={500}
              height={500}
              alt="inquire-button"
              className="w-full h-full"
            />
          </button>
        </div>
        <p className="text-white text-sm md:text-xs lg:text-[0.8rem] xl:text-[0.9rem] font-light leading-normal lg:leading-[1.3]">
          Extending growth and dynamism in the South, a thriving estate spurs
          active and living wellness with distinct recreation and lifestyle
          destinations, interconnected verdant parks, and outdoor retail spaces.
          The Courtyards opens a private sanctuary celebrating a magnified
          experience of living with an abundance of possibilities and
          conveniences.
        </p>
      </div>
      <div className="md:bg-none md:bg-transparent bg-about-sec-gradient rounded-lg p-4">
        <DevelopmentSummary />
      </div>
    </section>
  );
};

export default About;
