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
    { image: "/images/rc5.webp", id: "residential-condo-4" },
    { image: "/images/rc6.webp", id: "residential-condo-4" },
  ];

  const officeSpaces = [{ image: "/images/ovp1.webp", id: "office-space-1" }];

  const leisureRecreation = [
    { image: "/images/ac1.webp", id: "leisure-rec-1" },
  ];

  // Separate state variables for each slider
  const [currentSlideLots, setCurrentSlideLots] = useState(0);
  const [currentSlideCondos, setCurrentSlideCondos] = useState(0);

  const settings = (setCurrentSlide: (slide: number) => void) => ({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    className: "right-side-visible-slider",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.1,
          centerMode: true, // Enable center mode
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          centerMode: true, // Enable center mode
          centerPadding: "20px",
        },
      },
    ],
    beforeChange: (_: number, next: number) => setCurrentSlideLots(next),
  });

  // Custom Next Arrow component
  const CustomNextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div
      className="custom-slick-next absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    ></div>
  );

  return (
    <section className="relative bg-gray-50 py-12">
      <Image
        src="/images/residential-sec-bg.webp"
        alt="Real Estate"
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        quality={100}
        priority
        className="z-0 object-cover opacity-50"
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
            className="w-[45px] h-auto"
          />
        </div>
        <Slider {...settings(setCurrentSlideLots)} className="relative w-full">
          {residentialLots.map((item, index) => {
            const navbarIndexMap: Partial<Record<number, number>> = {
              0: 0,
              1: 4,
              2: 5,
              3: 2,
              4: 1,
              5: 3,
            };

            const navbarIndex = navbarIndexMap[index] ?? index;
            return (
              <div
                key={index}
                id={item.id}
                className="outline-none px-2 rounded-xl"
              >
                <Link href={`/properties/${NAVBARCONSTANT[navbarIndex].id}`}>
                  <div className="relative h-[350px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt="resident-lots-image"
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                      className="w-full h-full rounded-lg shadow-md object-contain"
                    />
                  </div>
                </Link>
              </div>
            );
          })}
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
            className="w-[45px] h-auto"
          />
        </div>
        <Slider {...settings(setCurrentSlideLots)} className="relative w-full">
          {residentialCondominiums.map((item, index) => {
            const navbarIndexMap: Partial<Record<number, number>> = {
              0: 6,
              1: 7,
              2: 5,
              3: 8,
              4: 9,
              5: 8,
            };

            const navbarIndex = navbarIndexMap[index] ?? index;
            return (
              <div
                key={index}
                id={item.id}
                className="px-2 outline-none overflow-hidden"
              >
                <Link href={`/properties/${NAVBARCONSTANT[navbarIndex].id}`}>
                  <div className="relative h-[350px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt="resident-lots-image"
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                      className="w-full h-full rounded-lg shadow-md object-contain"
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="grid container grid-cols-1 sm:grid-col-[80%] md:grid-cols-2 gap-x-2 md:gap-x-10 lg:gap-x-20 xl:gap-x-12 justify-items-start lg:justify-between">
        <div className="relative my-4 w-full">
          <div className="flex justify-between items-center gap-x-6 lg:justify-between mb-2">
            <div>
              <h1 className="text-gray-800 text-3xl md:text-2xl lg:text-4xl font-bold">
                Office
              </h1>
              <p className="text-sm md:text-base font-light text-gray-600 mb-3">
                Discover which property suits you best
              </p>
            </div>
            <Image
              src="/images/alp-icon.webp"
              width={45}
              height={45}
              alt="ALP-Icon"
              className="w-[45px] h-auto"
            />
          </div>

          {officeSpaces.map((item, index) => {
            const navbarIndexMap: Partial<Record<number, number>> = {
              0: 10,
            };

            const navbarIndex = navbarIndexMap[index] ?? index;
            return (
              <div
                key={index}
                id={item.id}
                className="px-2 outline-none w-full max-w-[440px]"
              >
                <Link href={`/properties/${NAVBARCONSTANT[navbarIndex].id}`}>
                  <div className="relative h-[200px] xs:h-[250px] sm:h-[300px] lg:h-[343px] max-w-[447px] overflow-hidden">
                    <Image
                      src="/images/one-vertis-plaza-btn.webp"
                      alt="resident-lots-image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 447px"
                      className="w-full h-auto rounded-lg shadow-md object-contain object-left"
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="relative mt-4 w-full">
          <div className="flex justify-between items-center gap-x-6 lg:justify-between mb-2">
            <div>
              <h1 className="text-gray-800 text-3xl md:text-2xl lg:text-4xl font-bold">
                Leisure & Recreation
              </h1>
              <p className="text-sm md:text-base font-light text-gray-600 mb-3">
                Discover which property suits you best
              </p>
            </div>
            <Image
              src="/images/alp-icon.webp"
              width={45}
              height={45}
              alt="ALP-Icon"
              className="w-[45px] h-auto"
            />
          </div>

          {leisureRecreation.map((item, index) => {
            const navbarIndexMap: Partial<Record<number, number>> = {
              0: 11,
            };

            const navbarIndex = navbarIndexMap[index] ?? index;
            return (
              <div
                key={index}
                id={item.id}
                className="px-2 outline-none max-w-[447px]"
              >
                <Link href={`/properties/${NAVBARCONSTANT[navbarIndex].id}`}>
                  <div className="relative h-[200px] xs:h-[250px] sm:h-[300px] lg:h-[343px] max-w-[447px] overflow-hidden">
                    <Image
                      src="/images/anvaya-cove-btn.webp"
                      alt="resident-lots-image"
                      fill
                      sizes="(max-width: 768px) 100vh, (max-width: 1024px) 50vw, 447px"
                      className="w-full h-auto rounded-lg shadow-md object-contain object-left"
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
