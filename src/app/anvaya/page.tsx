"use client";
import About from "@/components/Anvaya/About/About";
import Banner from "@/components/Anvaya/Banner/Banner";
import Navbar from "@/components/ui/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Head from "next/head";

const Ayalaland = () => {
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

  const handleInquiryClick = () => {
    router.push("/#inquiry-form");
  };
  return (
    <main className="relative min-h-screen">
      <Head>
        <link rel="preload" href="/images/homepage-banner-bg.webp" as="image" />
      </Head>
      {/* Background Image */}
      <div
        style={{
          backgroundImage: "url('/images/homepage-banner-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 w-full h-full z-0 filter blur-sm"
      ></div>

      <div className="relative container z-10 py-10">
        <Navbar />

        <div className="md:bg-[linear-gradient(90deg,_rgba(43,43,16,0.8)_20%,_rgba(66,59,26,0.8)_65%,_rgba(57,59,41,0.8)_100%)] md:p-4 rounded-xl lg:grid-cols-[40%_1fr]">
          <div className="mb-3 md:mb-0">
            <Banner
              location={location}
              setLocation={setLocation}
              handleInquiryClick={handleInquiryClick}
            />
          </div>
          <div className="">
            <About
              location={location}
              setLocation={setLocation}
              handleInquiryClick={handleInquiryClick}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Ayalaland;
