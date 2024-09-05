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

  const settings = (
    currentSlide: number,
    setCurrentSlide: (slide: number) => void,
    slideCount: number
  ) => ({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: (
      <CustomNextArrow currentSlide={currentSlide} slideCount={slideCount} />
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
    beforeChange: (current: number, next: number) => setCurrentSlideLots(next),
  });

  const CustomNextArrow = ({
    onClick,
    currentSlide,
    slideCount,
  }: {
    onClick?: () => void;
    currentSlide: number;
    slideCount: number;
  }) =>
    currentSlide < slideCount - 4 ? (
      <div className="custom-slick-next" onClick={onClick} />
    ) : null;

  return (
    <section className="relative bg-gray-50 py-12">
      <Image
        src="/images/residential-sec-bg.webp"
        alt="Real Estate"
        fill
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
        <Slider
          {...settings(currentSlideLots, setCurrentSlideLots, residentialLots.length)}
          className="relative w-full"
        >
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
                      fill={true}
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
        <Slider
          {...settings(
            currentSlideCondos,
            setCurrentSlideCondos,
            residentialCondominiums.length
          )}
          className="relative w-full"
        >
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
                      fill={true}
                      className="w-full h-full rounded-lg shadow-md object-contain"
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="flex container flex-col md:flex-row gap-x-2 lg:gap-x-10 xl:gap-x-12">
        <div className="relative container mx-auto px-4 my-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-gray-800 text-3xl md:text-2xl lg:text-4xl font-bold">
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
                className="px-2 outline-none w-full max-w-[400px]"
              >
                <Link href={`/properties/${NAVBARCONSTANT[navbarIndex].id}`}>
                  <div className="relative h-[300px] lg:h-[350px] overflow-hidden">
                    <Image
                      src="/images/one-vertis-plaza-btn.webp"
                      alt="resident-lots-image"
                      fill={true}
                      className="w-full h-full rounded-lg shadow-md object-contain"
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="relative container mx-auto px-4 mt-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-gray-800 text-3xl md:text-2xl lg:text-4xl font-bold">
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
                className="px-2 outline-none max-w-[400px]"
              >
                <Link href={`/properties/${NAVBARCONSTANT[navbarIndex].id}`}>
                  <div className="relative h-[300px] lg:h-[350px] overflow-hidden">
                    <Image
                      src="/images/anvaya-cove-btn.webp"
                      alt="resident-lots-image"
                      fill={true}
                      className="w-full h-full rounded-lg shadow-md object-contain"
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
