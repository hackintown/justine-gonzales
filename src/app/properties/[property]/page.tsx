import type { Metadata } from "next";
import React from "react";
import About from "@/components/Anvaya/About/About";
import Banner from "@/components/Anvaya/Banner/Banner";
import Navbar from "@/components/ui/Navbar/Navbar";
import { NAVBARCONSTANT } from "@/components/ui/Navbar/constants";

type Props = {
  params: {
    property: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const property = NAVBARCONSTANT.find((item) => item.id === params.property);

  if (!property) {
    return {
      title: "Property Not Found | Ayala Land Premier",
      description: "The requested property could not be found.",
    };
  }

  return {
    title: property.metaTitle || `${property.name} | Ayala Land Premier`,
    description:
      property.metaDescription || property.description?.slice(0, 160) + "...",
    keywords:
      property.keyword ||
      [
        property.name,
        "Ayala Land Premier",
        "luxury homes",
        "Philippines real estate",
        property.location,
      ].filter(Boolean),
  };
}

export default function PropertyPage({ params }: Props) {
  const property = NAVBARCONSTANT.find((item) => item.id === params.property);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <main className="relative min-h-screen">
      <div
        style={{
          backgroundImage: "url('/images/properties-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 w-full h-full z-0"
      ></div>

      <div className="relative container z-10 py-10">
        <Navbar />
        <div className="md:bg-black md:bg-opacity-60 md:p-4 rounded-xl lg:grid-cols-[40%_1fr]">
          <div className="mb-3 md:mb-0">
            <Banner param={params.property} />
          </div>
          <div className="">
            <About param={params.property} />
          </div>
        </div>
      </div>
    </main>
  );
}
