import SocialIcons from "@/components/ui/Icons/SocialIcons";
import Navbar from "@/components/ui/Navbar/Navbar";
import Image from "next/image";
import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="relative h-[600px] w-full">
      {/* Background Image */}
      <Image
        src="/images/main-hero-bg.jpg" // Verify this path
        alt="Real Estate"
        layout="fill"
        objectFit="cover"
        quality={75} // Lower quality setting to reduce file size
        className="z-0"
        priority
        sizes="100vw" // Ensures the image covers the full width of the viewport
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-10" />
      {/* Adjust opacity if needed */}
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="container mt-10 sm:mt-12 md:mt-16">
          <Navbar />
          <div className="mt-36">
            <h1 className="font-light text-5xl text-white font-serif">
              For Keeps
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-0 py-6 sm:py-8 backdrop-blur-sm z-10">
        <div className="flex items-center gap-x-8  container">
          <div className="hidden md:block relative w-full max-w-[250px]">
            <Image
              src="/images/ayalaland-logo.png" // Ensure this path is correct
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
      <div className="absolute right-8 top-1/4 sm:top-[200px] bg-gradient-to-b from-[rgba(42,43,14,0.5)] via-[rgba(59,60,20,0.5)] to-[rgba(42,43,14,0.5)] rounded-lg z-10">
        <SocialIcons />
      </div>
    </section>
  );
};

export default Banner;
