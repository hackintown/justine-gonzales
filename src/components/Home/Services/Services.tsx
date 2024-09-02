"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NAVBARCONSTANT } from "@/components/ui/Navbar/constants";
import Link from "next/link";

const Services: React.FC = () => {
  const data = NAVBARCONSTANT.map((item) => ({
    location: item.location,
    name: item.name,
  }));

  const residentialLots = [
    { image: "/images/rl1.webp", id: "residential-lot-1" },
    { image: "/images/rl2.webp", id: "residential-lot-2" },
    { image: "/images/rl3.webp", id: "residential-lot-3" },
    { image: "/images/rl4.webp", id: "residential-lot-4" },
    { image: "/images/rl5.webp", id: "residential-lot-5" },
    { image: "/images/rl6.webp", id: "residential-lot-5" },
  ];

  const residentialCondominiums = [
    { image: "/images/rc1.webp", id: "residential-condo-1" },
    { image: "/images/rc2.webp", id: "residential-condo-2" },
    { image: "/images/rc3.webp", id: "residential-condo-3" },
    { image: "/images/rc4.webp", id: "residential-condo-4" },
  ];

  const officeSpaces = [
    { image: "/images/ovp1.webp", id: "office-space-1" },
    { image: "/images/ovp2.webp", id: "office-space-2" },
    { image: "/images/ovp3.webp", id: "office-space-3" },
    { image: "/images/ovp4.webp", id: "office-space-4" },
    { image: "/images/ovp5.webp", id: "office-space-5" },
    { image: "/images/ovp6.webp", id: "office-space-6" },
  ];

  const leisureRecreation = [
    { image: "/images/ac1.webp", id: "leisure-rec-1" },
    { image: "/images/ac2.webp", id: "leisure-rec-2" },
    { image: "/images/ac3.webp", id: "leisure-rec-3" },
    { image: "/images/ac4.webp", id: "leisure-rec-4" },
    { image: "/images/ac5.webp", id: "leisure-rec-5" },
    { image: "/images/ac6.webp", id: "leisure-rec-6" },
  ];

  // Separate state variables for each slider
  const [currentSlideLots, setCurrentSlideLots] = useState(0);
  const [currentSlideCondos, setCurrentSlideCondos] = useState(0);
  const [currentSlideOffice, setCurrentSlideOffice] = useState(0);
  const [currentSlideLeisure, setCurrentSlideLeisure] = useState(0);

  const settings = (
    currentSlide: number,
    setCurrentSlide: (slide: number) => void
  ) => ({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
    beforeChange: (current: number, next: number) => setCurrentSlideLots(next),
  });

  const CustomPrevArrow = ({
    onClick,
    currentSlide,
  }: {
    onClick?: () => void;
    currentSlide: number;
  }) =>
    currentSlide > 0 && <div className="custom-slick-prev" onClick={onClick} />;

  const CustomNextArrow = ({
    onClick,
    currentSlide,
    slideCount,
  }: {
    onClick?: () => void;
    currentSlide: number;
    slideCount: number;
  }) =>
    currentSlide < slideCount - 4 && (
      <div className="custom-slick-next" onClick={onClick} />
    );

  return (
    <section className="relative bg-gray-50 py-12">
      <Image
        src="/images/residential-sec-bg.webp"
        alt="Real Estate"
        fill
        quality={75}
        priority
        className="z-0"
      />
      <div className="relative container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-gray-800 text-3xl md:text-4xl font-bold">
              Residential Lots
            </h1>
            <p className="text-sm md:text-base font-light text-gray-600">
              Discover which property suits you best
            </p>
          </div>
          <Image
            src="/images/alp-icon.webp"
            width={45}
            height={45}
            alt="ALP-Icon"
            className="w-[45px] h-[45px]"
          />
        </div>
        <Slider
          {...settings(currentSlideLots, setCurrentSlideLots)}
          prevArrow={<CustomPrevArrow currentSlide={currentSlideLots} />}
          nextArrow={
            <CustomNextArrow
              currentSlide={currentSlideLots}
              slideCount={residentialLots.length}
            />
          }
          className="relative w-full"
        >
          {residentialLots.map((item, index) => (
            <div
              key={index}
              id={item.id}
              className="outline-none overflow-hidden px-2 rounded-xl"
            >
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={item.image}
                  alt="resident-lots-image"
                  width={320}
                  height={320}
                  className="w-full h-full rounded-lg shadow-md object-cover"
                />
                <div className="absolute bottom-0 px-2 py-2 w-full flex flex-col  bg-[#344530] rounded-lg">
                  <h2 className="text-white text-base  font-bold mb-1">
                    {data[index]?.name || "Loading Name..."}
                  </h2>
                  <div className="flex items-center justify-between gap-x-2 mb-1">
                    <p className="text-sm text-white">
                      {data[index]?.location || "Location Loading..."}
                    </p>
                    <Link href={`/properties/${NAVBARCONSTANT[index].id}`}>
                      <button className="text-[#283425] text-sm font-semibold bg-white rounded-lg px-2 py-1 text-nowrap">
                        View Property
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="relative container mx-auto px-4 my-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-gray-800 text-3xl md:text-4xl font-bold">
              Residential Condominiums
            </h1>
            <p className="text-sm md:text-base font-light text-gray-600">
              Discover which property suits you best
            </p>
          </div>
          <Image
            src="/images/alp-icon.webp"
            width={45}
            height={45}
            alt="ALP-Icon"
            className="w-[45px] h-[45px]"
          />
        </div>
        <Slider
          {...settings(currentSlideCondos, setCurrentSlideCondos)}
          prevArrow={<CustomPrevArrow currentSlide={currentSlideCondos} />}
          nextArrow={
            <CustomNextArrow
              currentSlide={currentSlideCondos}
              slideCount={residentialCondominiums.length}
            />
          }
          className="relative w-full"
        >
          {residentialCondominiums.map((item, index) => {
            const dataIndex = index + 6;
            return (
              <div
                key={index}
                id={item.id}
                className="px-2 outline-none overflow-hidden"
              >
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt="resident-lots-image"
                    width={320}
                    height={240}
                    quality={75} // Reduced quality for optimization
                    loading="lazy" // Lazy load images
                    className="w-full h-full rounded-lg shadow-md object-cover"
                  />
                  <div className="absolute bottom-0 px-2 py-2 w-full flex flex-col  bg-[#344530] rounded-lg">
                    <h2 className="text-white text-base  font-bold mb-1">
                      {data[dataIndex]?.name || "Loading Name..."}
                    </h2>
                    <div className="flex items-center justify-between gap-x-2 mb-1">
                      <p className="text-sm text-white">
                        {data[dataIndex]?.location || "Location Loading..."}
                      </p>
                      <Link
                        href={`/properties/${NAVBARCONSTANT[dataIndex].id}`}
                      >
                        <button className="text-[#283425] text-sm font-semibold bg-white rounded-lg px-2 py-1 text-nowrap">
                          View Property
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="relative container mx-auto px-4 my-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-gray-800 text-3xl md:text-4xl font-bold">
              Office
            </h1>
            <p className="text-sm md:text-base font-light text-gray-600">
              Discover which property suits you best
            </p>
          </div>
          <Image
            src="/images/alp-icon.webp"
            width={45}
            height={45}
            alt="ALP-Icon"
            className="w-[45px] h-[45px]"
          />
        </div>
        <Slider
          {...settings(currentSlideOffice, setCurrentSlideOffice)}
          prevArrow={<CustomPrevArrow currentSlide={currentSlideOffice} />}
          nextArrow={
            <CustomNextArrow
              currentSlide={currentSlideOffice}
              slideCount={officeSpaces.length}
            />
          }
          className="relative w-full"
        >
          {officeSpaces.map((item, index) => {
            const dataIndex = (index = 10);
            return (
              <div key={index} id={item.id} className="px-2  outline-none">
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt="resident-lots-image"
                    width={320}
                    height={240}
                    className="w-full h-full rounded-lg shadow-md object-cover"
                  />
                  <div className="absolute bottom-0 px-2 py-2 w-full flex flex-col  bg-[#344530] rounded-lg">
                    <h2 className="text-white text-base  font-bold mb-1">
                      {data[dataIndex]?.name || "Loading Name..."}
                    </h2>
                    <div className="flex items-center justify-between gap-x-2 mb-1">
                      <p className="text-sm text-white">
                        {data[dataIndex]?.location || "Location Loading..."}
                      </p>
                      <Link
                        href={`/properties/${NAVBARCONSTANT[dataIndex].id}`}
                      >
                        <button className="text-[#283425] text-sm font-semibold bg-white rounded-lg px-2 py-1 text-nowrap">
                          View Property
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="relative container mx-auto px-4 my-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-gray-800 text-3xl md:text-4xl font-bold">
              Leisure & Recreation
            </h1>
            <p className="text-sm md:text-base font-light text-gray-600">
              Discover which property suits you best
            </p>
          </div>
          <Image
            src="/images/alp-icon.webp"
            width={45}
            height={45}
            alt="ALP-Icon"
            className="w-[45px] h-[45px]"
          />
        </div>
        <Slider
          {...settings(currentSlideLeisure, setCurrentSlideLeisure)}
          prevArrow={<CustomPrevArrow currentSlide={currentSlideLeisure} />}
          nextArrow={
            <CustomNextArrow
              currentSlide={currentSlideLeisure}
              slideCount={leisureRecreation.length}
            />
          }
          className="relative w-full"
        >
          {leisureRecreation.map((item, index) => {
            const dataIndex = (index = 11);
            return (
              <div key={index} id={item.id} className="px-2 outline-none ">
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt="resident-lots-image"
                    width={320}
                    height={240}
                    quality={75} // Reduced quality for optimization
                    loading="lazy" // Lazy load images
                    className="w-full h-full rounded-lg shadow-md object-cover"
                  />
                  <div className="absolute bottom-0 px-2 py-2 w-full flex flex-col  bg-[#344530] rounded-lg">
                    <h2 className="text-white text-base  font-bold mb-1">
                      {data[dataIndex]?.name || "Loading Name..."}
                    </h2>
                    <div className="flex items-center justify-between gap-x-2 mb-1">
                      <p className="text-sm text-white">
                        {data[dataIndex]?.location || "Location Loading..."}
                      </p>
                      <Link
                        href={`/properties/${NAVBARCONSTANT[dataIndex].id}`}
                      >
                        <button className="text-[#283425] text-sm font-semibold bg-white rounded-lg px-2 py-1 text-nowrap">
                          View Property
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
