"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services: React.FC = () => {
  const residentialLots = [
    { image: "/images/rl-1.png" },
    { image: "/images/rl-2.png" },
    { image: "/images/rl-3.png" },
    { image: "/images/rl-4.png" },
    { image: "/images/rl-5.png" },
  ];

  const residentialCondominiums = [
    { image: "/images/rc-1.png" },
    { image: "/images/rc-2.png" },
    { image: "/images/rc-3.png" },
    { image: "/images/rc-4.png" },
    { image: "/images/rc-5.png" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
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
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      currentSlide > 0 && (
        <div className="custom-slick-prev" onClick={onClick} />
      )
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      currentSlide < residentialLots.length - 3 && (
        <div className="custom-slick-next" onClick={onClick} />
      )
    );
  };

  return (
    <section className="relative bg-gray-50 py-12">
      <Image
        src="/images/residential-sec-bg.png"
        alt="Real Estate"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 opacity-40"
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
            src="/images/alp-icon.png"
            width={500}
            height={500}
            alt="ALP-Icon"
            className="w-[40px] h-[40px]"
          />
        </div>
        <Slider
          {...settings}
          prevArrow={<CustomPrevArrow />}
          nextArrow={<CustomNextArrow />}
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
            src="/images/alp-icon.png"
            width={500}
            height={500}
            alt="ALP-Icon"
            className="w-[40px] h-[40px]"
          />
        </div>
        <Slider
          {...settings}
          prevArrow={<CustomPrevArrow />}
          nextArrow={<CustomNextArrow />}
          className="relative w-full"
        >
          {residentialCondominiums.map((item, index) => (
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
              Office
            </h1>
            <p className="text-sm md:text-base font-light text-gray-600">
              Discover which property suits you best
            </p>
          </div>
          <Image
            src="/images/alp-icon.png"
            width={500}
            height={500}
            alt="ALP-Icon"
            className="w-[40px] h-[40px]"
          />
        </div>
        <Slider
          {...settings}
          prevArrow={<CustomPrevArrow />}
          nextArrow={<CustomNextArrow />}
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
              Leisure & Recreation
            </h1>
            <p className="text-sm md:text-base font-light text-gray-600">
              Discover which property suits you best
            </p>
          </div>
          <Image
            src="/images/alp-icon.png"
            width={500}
            height={500}
            alt="ALP-Icon"
            className="w-[40px] h-[40px]"
          />
        </div>
        <Slider
          {...settings}
          prevArrow={<CustomPrevArrow />}
          nextArrow={<CustomNextArrow />}
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
    </section>
  );
};

export default Services;
