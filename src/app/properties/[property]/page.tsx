import Head from "next/head";
import React from "react";
import About from "@/components/Anvaya/About/About";
import Banner from "@/components/Anvaya/Banner/Banner";
import Navbar from "@/components/ui/Navbar/Navbar";

type Props = {
  params: {
    property: string;
  };
};

const Test = (props: Props) => {
  const param = props.params.property;
  return (
    <main className="relative min-h-screen">
      <Head>
        <link rel="preload" href="/images/homepage-banner-bg.webp" as="image" />
      </Head>
      {/* Background Image */}
      <div
        style={{
          backgroundImage: "url('/images/homepage-banner-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 w-full h-full z-0 filter blur-sm"
      ></div>

      <div className="relative container z-10 py-10">
        <Navbar />
        <div className="md:bg-[linear-gradient(90deg,_rgba(43,43,16,0.8)_20%,_rgba(66,59,26,0.8)_65%,_rgba(57,59,41,0.8)_100%)] md:p-4 rounded-xl lg:grid-cols-[40%_1fr]">
          <div className="mb-3 md:mb-0">
            <Banner param={param} />
          </div>
          <div className="">
            <About param={param} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Test;