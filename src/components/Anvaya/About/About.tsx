"use client";
import React, { useState } from "react";
import DevelopmentSummary from "./DevelopmentSummary";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import viewMapBtn from "../../../../public/images/view-map.webp";
import { NAVBARCONSTANT } from "@/components/ui/Navbar/constants";
import Link from "next/link";

interface AboutProps {
  param: string;
}

const About: React.FC<AboutProps> = ({ param }) => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleMapClick = () => {
    setIsMapOpen(true);
  };

  const closeMapPopup = () => {
    setIsMapOpen(false);
  };

  const handleBackdropClick = (e: { target: any; currentTarget: any }) => {
    // Close the popup if the user clicks on the backdrop (not the popup itself)
    if (e.target === e.currentTarget) {
      closeMapPopup();
    }
  };

  const data = NAVBARCONSTANT.filter((data) => {
    return data.id === param;
  }) as any;

  return (
    <section className="md:grid md:grid-cols-[45%_1fr] md:items-start xl:items-start md:gap-3">
      <div className="hidden w-full md:block lg:pt-5">
        <div className="flex items-center lg:items-start justify-between mt-5">
          <h1 className="text-2xl lg:text-3xl font-bold text-white">
            {data[0].name}
          </h1>
          <Link
            href="/#inquiry-form"
            className="mt-2 block max-w-[120px] lg:max-w-[140px]"
          >
            <Image
              src="/images/inquire-btn.webp"
              width={500}
              height={500}
              alt="Inquire Button"
              className="w-full"
            />
          </Link>
        </div>

        <p className="flex items-center space-x-2 border-2 mt-2 mb-2 md:mb-4 border-white px-2 py-2 rounded-xl">
          <IoLocationOutline className="text-white size-5" />
          <span className="text-white">{data[0].location}</span>
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
              alt="map"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
        <p className="text-white text-justify hyphens-auto text-sm md:text-xs lg:text-[0.8rem] xl:text-[0.9rem] font-light leading-normal lg:leading-[1.3]">
          {data[0].about}
        </p>
        <p className="text-white text-justify hyphens-auto text-sm md:text-xs lg:text-[0.8rem] xl:text-[0.9rem] my-3 font-light leading-normal lg:leading-[1.3]">
          {data[0].description}
        </p>
      </div>
      <div className="md:bg-none md:bg-transparent bg-black bg-opacity-30 rounded-lg p-4">
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
                alt="map"
                className="w-full h-full"
              />
            </button>
          </div>
          <p className="text-white text-sm md:text-xs lg:text-[0.8rem] xl:text-[0.9rem] font-light leading-normal lg:leading-[1.3]">
            {data[0].about}
          </p>
        </div>
        <DevelopmentSummary param={param} />
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
            className="relative p-2 bg-black rounded-lg shadow-xl w-auto"
          >
            <button
              className="absolute top-5 right-6 w-7 h-7 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md transition-all duration-300"
              onClick={closeMapPopup}
            >
              &#10005;
            </button>
            <Image
              src={`/images/${data[0].map}`}
              width={800}
              height={600}
              alt="map-image"
              className="rounded-lg w-full h-full max-h-[600px] object-contain"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default About;
