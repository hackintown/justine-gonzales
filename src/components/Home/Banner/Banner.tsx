"use client";
import SocialIcons from "@/components/ui/Icons/SocialIcons";
import Navbar from "@/components/ui/Navbar/Navbar";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const images = [
  "/images/banner-slide1.webp",
  "/images/banner-slide2.webp",
  "/images/banner-slide3.webp",
  "/images/banner-slide4.webp",
  "/images/banner-slide5.webp",
  "/images/banner-slide6.webp",
  "/images/banner-slide7.webp",
  "/images/banner-slide8.webp",
  "/images/banner-slide9.webp",
  "/images/banner-slide10.webp",
  "/images/banner-slide11.webp",
  "/images/banner-slide12.webp",
  "/images/banner-slide13.webp",
  "/images/banner-slide14.webp",
  "/images/banner-slide15.webp",
  "/images/banner-slide16.webp",
];
const Banner: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative h-[600px] lg:h-[680] xl:h-[750px] w-full bg-black">
      {/* Background Image Slider */}
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className={`absolute inset-0 ${
              currentImageIndex === index ? "z-10" : "z-0"
            }`}
          >
            <Image
              src={image}
              alt="Real Estate"
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              className="object-cover"
              priority={index === 0} // Ensure the first image is loaded with priority
            />
          </motion.div>
        ))}
      </div>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent
       to-black/50 lg:bg-gradient-to-l lg:from-transparent lg:via-transparent
        lg:to-black/50 z-20
        lg:before:absolute lg:before:inset-x-0 lg:before:bottom-0 lg:before:h-1/3 lg:before:bg-gradient-to-t lg:before:from-black/30
        "
      />
      {/* Adjust opacity if needed */}
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-40">
        <div className="container mt-10 sm:mt-12 md:mt-16">
          <Navbar />
          <div className="mt-36 md:mt-20 lg:mt-28">
            <Image
              src="/images/for-keeps.webp"
              width={500}
              height={500}
              alt="for-keeps"
              className="w-44 sm:w-52 md:w-80 lg:w-96 xl:w-2/6"
            />
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-0 py-6 sm:py-8 backdrop-blur-sm z-20">
        <div className="flex items-center gap-x-8  container">
          <div className="hidden md:block relative w-full max-w-[250px]">
            <Image
              src="/images/ayalaland-logo.webp" // Ensure this path is correct
              alt="Ayala Land Premier"
              width={500}
              height={500}
              className="z-10" // Ensure z-index is correctly applied
            />
          </div>
          <p className="text-xs sm:text-sm text-white font-light">
            <span className="font-bold">Ayala Land</span> transformed the
            Philippine landscape with the nation&apos;s premier business
            district over five decades ago. As the largest, most experienced,
            and most trusted company in its field, Ayala Land leads the
            burgeoning real estate industry in the Philippines with prime
            residential and commercial developments.
            <span className="font-bold">Ayala Land Premier</span> carries the
            heritage of Ayala Land.
          </p>
        </div>
      </div>
      {/* Social Icons */}
      <div className="absolute right-8 top-1/4 sm:top-[200px] bg-black bg-opacity-80 rounded-lg z-40">
        <SocialIcons />
      </div>
    </section>
  );
};

export default Banner;
