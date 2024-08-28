import React, { useState } from "react";
import DevelopmentSummary from "./DevelopmentSummary";
import SocialIcons from "../../ui/Icons/SocialIcons";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import inquireBtn from "../../../../public/images/inquire-btn.webp";
import viewMapBtn from "../../../../public/images/view-map.webp";
import mapImage from "../../../../public/images/anvaya-vicinity-map.webp";

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
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleMapClick = () => {
    setIsMapOpen(true);
  };

  const closeMapPopup = () => {
    setIsMapOpen(false);
  };

  const handleBackdropClick = (e: { target: any; currentTarget: any; }) => {
    // Close the popup if the user clicks on the backdrop (not the popup itself)
    if (e.target === e.currentTarget) {
      closeMapPopup();
    }
  };
  return (
    <section className="md:grid md:grid-cols-[45%_1fr] md:items-center md:gap-3">
      <div className="hidden w-full md:block">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl lg:text-3xl font-bold text-white">
            Anvaya Cove
          </h1>
          <button
            className="max-w-[110px] lg:max-w-[130px]"
            onClick={(e) => handleInquiryClick}
          >
            <Image
              src={inquireBtn}
              width={500}
              height={500}
              alt="inquire-button"
              className="w-full"
              onClick={handleInquiryClick}
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
          <button
            className="max-w-[110px] lg:max-w-[140px]"
            onClick={handleMapClick}
          >
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
          Presenting the excitement of a seaside resort and the tranquility of a
          mountain retreat, unique tropical features provide residents with the
          best that nature has to offer. A 620-hectare development designed for
          shared moments among family, Anvaya Cove offers endless opportunities
          to forge lifelong memories. A dynamic community nurturing family above
          everything else. With an array of amenities, services, events and
          activities, family ties flourish at Anvaya Cove.
        </p>
      </div>
      <div className="md:bg-none md:bg-transparent bg-about-sec-gradient rounded-lg p-4">
        <div className="md:hidden w-full">
          <div className="flex justify-between items-center mb-3 md:mb-2">
            <h2 className="text-2xl lg:text-3xl font-bold text-white">About</h2>
            <button
              className="max-w-[130px] lg:max-w-[140px]"
              onClick={handleMapClick}
            >
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
            Presenting the excitement of a seaside resort and the tranquility of
            a mountain retreat, unique tropical features provide residents with
            the best that nature has to offer. A 620-hectare development
            designed for shared moments among family, Anvaya Cove offers endless
            opportunities to forge lifelong memories. A dynamic community
            nurturing family above everything else. With an array of amenities,
            services, events and activities, family ties flourish at Anvaya
            Cove.
          </p>
        </div>
        <DevelopmentSummary />
      </div>
      {/* Map Popup */}
      {isMapOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={(e) => handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative p-4 bg-white rounded-lg shadow-xl"
          >
            <button
              className="absolute top-5 right-6 w-10 h-10 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md transition-all duration-300"
              onClick={closeMapPopup}
            >
              &#10005;
            </button>
            <Image
              src={mapImage}
              width={800}
              height={600}
              alt="map-image"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default About;
