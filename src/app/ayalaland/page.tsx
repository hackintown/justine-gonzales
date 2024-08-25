import Banner from "@/components/Ayalaland/Banner/Banner";
import FeaturedProject from "@/components/Ayalaland/Features/FeaturedProject";
import Info from "@/components/Ayalaland/Info/Info";
import Services from "@/components/Ayalaland/Services/Services";
import React from "react";

const ayalaland = () => {
  return (
    <main>
      <Banner />
      <Info />
      <Services />
      <FeaturedProject/>
    </main>
  );
};

export default ayalaland;
