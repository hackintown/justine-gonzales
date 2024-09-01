"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { NAVBARCONSTANT } from "@/components/ui/Navbar/constants";

interface BannerProps {
  param: string;
}

const Banner: React.FC<BannerProps> = ({ param }) => {
  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust autoplay speed (in milliseconds)
  };

  const data = NAVBARCONSTANT.filter((data) => {
    return data.id === param;
  }) as any;

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
        <div className="relative  h-full">
          <Slider {...sliderSettings} className="rounded-lg overflow-hidden">
            {data[0].images.map(
              (image: { src: string; alt: string }, index: number) => (
                <div
                  key={index}
                  className="rounded-xl h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px] w-full overflow-hidden"
                >
                  <Image
                    src={image.src}
                    height={500}
                    width={1200}
                    quality={75} // Adjust image quality for optimization
                    priority={index === 0} // Load the first image eagerly
                    alt={image.alt}
                    className="w-full h-full object-cover" // Ensure full coverage
                  />
                </div>
              )
            )}
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
          <div className="absolute top-10 right-3 transform -translate-y-1/2 max-w-[120px] w-full">
            <Image
              src={`/images/${data[0].logo}`}
              height={500}
              width={500}
              alt="Anvaya Logo"
              className="w-full h-auto filter drop-shadow"
            />
          </div>
        </div>
        <div className="md:hidden">
          <p className="flex items-center space-x-2 border-2 mt-6 mb-2 border-white px-2 py-2 rounded-xl">
            <IoLocationOutline className="text-white size-5" />
            <span className="text-white">{data[0].location}</span>
          </p>
          <h1 className="text-4xl font-bold text-white">{data[0].name}</h1>
          <Link href="/#inquiry-form">
            <button className="max-w-[165px] mt-3">
              <Image
                src="/images/inquire-btn.webp"
                width={500}
                height={500}
                alt="Inquire Button"
                className="w-full"
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
