import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
const Banner = () => {
  return (
    <section className="relative container">
      <div
        className="p-4 
h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-lg rounded-lg"
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
          <button className="mt-2 bg-gray-400 text-white text-lg py-2 px-8 rounded-lg">
            INQUIRE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
