"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services: React.FC = () => {
  const residentialLots = [
    { image: "/images/rl-1.webp" },
    { image: "/images/rl-2.webp" },
    { image: "/images/rl-3.webp" },
    { image: "/images/rl-4.webp" },
    { image: "/images/rl-5.webp" },
  ];

  const residentialCondominiums = [
    { image: "/images/rc-1.webp" },
    { image: "/images/rc-2.webp" },
    { image: "/images/rc-3.webp" },
    { image: "/images/rc-4.webp" },
    { image: "/images/rc-5.webp" },
  ];
  const officeSpaces = [
    { image: "/images/rl-1.webp" },
    { image: "/images/rl-2.webp" },
    { image: "/images/rl-3.webp" },
    { image: "/images/rl-4.webp" },
    { image: "/images/rl-5.webp" },
  ];

  const leisureRecreation = [
    { image: "/images/rc-1.webp" },
    { image: "/images/rc-2.webp" },
    { image: "/images/rc-3.webp" },
    { image: "/images/rc-4.webp" },
    { image: "/images/rc-5.webp" },
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
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
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
            <div key={index} className="px-2 outline-none">
              <Image
                src={item.image}
                alt="resident-lots-image"
                width={320}
                height={240}
                className="rounded-lg shadow-md"
              />
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
          {residentialCondominiums.map((item, index) => (
            <div key={index} className="px-2 outline-none">
              <Image
                src={item.image}
                alt="resident-lots-image"
                width={320}
                height={240}
                quality={75} // Reduced quality for optimization
                loading="lazy" // Lazy load images
                className="rounded-lg shadow-md"
              />
            </div>
          ))}
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
          {officeSpaces.map((item, index) => (
            <div key={index} className="px-2 outline-none">
              <Image
                src={item.image}
                alt="resident-lots-image"
                width={320}
                height={240}
                className="rounded-lg shadow-md"
              />
            </div>
          ))}
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
          {leisureRecreation.map((item, index) => (
            <div key={index} className="px-2 outline-none">
              <Image
                src={item.image}
                alt="resident-lots-image"
                width={320}
                height={240}
                quality={75} // Reduced quality for optimization
                loading="lazy" // Lazy load images
                className="rounded-lg shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
