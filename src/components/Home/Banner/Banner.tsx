"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useRouter } from "next/navigation";
const Banner = () => {
  const [location, setLocation] = useState<string>("Fetching location...");
  const router = useRouter();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.NEXT_PUBLIC_OPENCAGE_API_KEY}`
            );

            const locationName = response.data.results[0].formatted;
            setLocation(locationName);
          } catch (error) {
            console.error("Error fetching location:", error);
            setLocation("Unable to fetch location");
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          setLocation("Location access denied");
        }
      );
    } else {
      setLocation("Geolocation is not supported by this browser.");
    }
  }, []);

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

  const handleInquiryClick = () => {
    router.push("/ayalaland#inquiry-form");
  };
  return (
    <section className="relative">
      <div
        className="p-4 h-full w-full shadow-xl rounded-lg bg-glass-gradient backdrop-glass"
        style={{
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          WebkitBackdropFilter: "blur(1.5px)",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <div className="relative">
          <Slider {...sliderSettings} className="rounded-lg overflow-hidden">
            <div className="rounded-xl max-h-[350px] h-full overflow-hidden">
              <Image
                src="/images/anvaya-bg.jpg"
                height={500}
                width={500}
                layout="responsive"
                quality={75} // Adjust image quality for optimization
                priority={true} // Load the first image eagerly
                alt="Anvaya Cove Background 1"
                className="w-full h-full"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/ANV-Golf-Pavilion-2.jpg"
                height={500}
                width={500}
                layout="responsive"
                quality={75} // Adjust image quality for optimization
                priority={true} // Load the first image eagerly
                alt="Anvaya Cove Background 2"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/ANV-Golf-Pavilion-3.jpg"
                height={500}
                width={500}
                layout="responsive"
                quality={75} // Adjust image quality for optimization
                priority={true} // Load the first image eagerly
                alt="Anvaya Cove Background 3"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/ANV-Golf-Pavilion-4.jpg"
                height={500}
                width={500}
                layout="responsive"
                quality={75} // Adjust image quality for optimization
                priority={true} // Load the first image eagerly
                alt="Anvaya Cove Background 3"
                className="w-full h-auto"
              />
            </div>
          </Slider>
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 max-w-[50px] w-full">
            <Image
              src="/images/mbl-next-icon.png"
              height={500}
              width={500}
              alt="Next Icon"
              className="w-full h-auto"
            />
          </div> 
          <div className="absolute top-7 right-3 transform -translate-y-1/2 max-w-[85px] w-full">
            <Image
              src="/images/anvaya-logo.png"
              height={500}
              width={500}
              alt="Next Icon"
              className="w-full h-auto"
            />
          </div>
        </div>
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
            src="/images/inquire-btn.png"
            width={500}
            height={500}
            alt="inquire-button"
            className="w-full"
          />
        </button>
      </div>
    </section>
  );
};

export default Banner;
