import Image from "next/image";
import React from "react";

const Info = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <Image
        src="/images/ayaland-sec-bg.png" // Ensure this path is correct
        alt="Ayala Land Premier"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      {/* Text Overlay */}
      <div className="relative py-8 container z-10 flex items-center justify-center">
        <div className="text-center text-white px-4 flex flex-col items-center">
          <div className="relative max-w-[250px]">
            <Image
              src="/images/ayalaland-logo.png" // Ensure this path is correct
              alt="Ayala Land Premier"
              width={500}
              height={500}
              className="z-10" // Ensure z-index is correctly applied
            />
          </div>
          <p className="mt-4 text-xs sm:text-sm font-light">
            With over a century of envisioning, building, and developing
            masterplanned communities, Ayala Land&apos;s rich history and illustrious
            reputation remain unparalleled in the country. Ayala Land recognizes
            that the value of land lies in how it can be sustained and enriched
            for future generations to enjoy, through: dramatic transformations
            that shape raw land into lasting communities, sustainable progress,
            and quality developments that create quality moments, embodying the
            company&apos;s thrust of &quot;Enhancing land, enriching lives for more
            people&quot;.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
