import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
const Banner = () => {
  return (
    <section className="relative">
      <div
        className="p-4 h-full w-full shadow-xl rounded-lg"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(1.5px)",
          WebkitBackdropFilter: "blur(1.5px)",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <div className="relative">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/images/anvaya-bg.jpg"
              height={500}
              width={500}
              alt="Anvaya Cove"
              className="w-full h-auto"
            />
          </div>
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

        <div>
          <p className="flex items-center space-x-2 border-2 mt-6 mb-2 border-white px-2 py-2 rounded-xl">
            <IoLocationOutline className="text-white size-5" />
            <span className="text-white font-light">Morong Bataan</span>
          </p>
          <h1 className="text-4xl font-bold text-white">Anvaya Cove</h1>
          <button className="max-w-[165px] mt-3">
            <Image
              src="/images/inquire-btn.png"
              width={500}
              height={500}
              alt="inquire-button"
              className="w-full"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
