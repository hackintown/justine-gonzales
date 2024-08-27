"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface BannerProps {
  location: string;
  setLocation: (location: string) => void;
  handleInquiryClick: () => void;
}

const Banner: React.FC<BannerProps> = ({
  location,
  setLocation,
  handleInquiryClick,
}) => {

  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust autoplay speed (in milliseconds)
  };

  return (
    <section className="relative">
      <div
        className="p-3 md:p-2 h-full w-full shadow-xl rounded-lg bg-glass-gradient backdrop-glass"
        style={{
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          WebkitBackdropFilter: "blur(1.5px)",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <div className="relative max-h-[500px] h-full">
          <Slider {...sliderSettings} className="rounded-lg overflow-hidden">
            {["/images/anvaya-bg.webp", "/images/ANV-Golf-Pavilion-2.webp", "/images/ANV-Golf-Pavilion-3.webp", "/images/ANV-Golf-Pavilion-4.webp"].map((src, index) => (
              <div key={index} className="rounded-xl max-h-[500px] h-full w-full overflow-hidden">
                <Image
                  src={src}
                  height={500}
                  width={1200}
                  quality={75} // Adjust image quality for optimization
                  priority={index === 0} // Load the first image eagerly
                  alt={`Anvaya Cove Background ${index + 1}`}
                  className="w-full h-full object-cover" // Ensure full coverage
                />
              </div>
            ))}
          </Slider>
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 max-w-[50px] w-full">
            <Image
              src="/images/mbl-next-icon.webp"
              height={500}
              width={500}
              alt="Next Icon"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute top-7 right-3 transform -translate-y-1/2 max-w-[85px] w-full">
            <Image
              src="/images/anvaya-logo.webp"
              height={500}
              width={500}
              alt="Anvaya Logo"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="md:hidden">
          <p className="flex items-center space-x-2 border-2 mt-6 mb-2 border-white px-2 py-2 rounded-xl">
            <IoLocationOutline className="text-white size-5" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent text-white font-light outline-none w-full"
            />
          </p>
          <h1 className="text-4xl font-bold text-white">Anvaya Cove</h1>
          <button className="max-w-[165px] mt-3" onClick={handleInquiryClick}>
            <Image
              src="/images/inquire-btn.webp"
              width={500}
              height={500}
              alt="Inquire Button"
              className="w-full"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
