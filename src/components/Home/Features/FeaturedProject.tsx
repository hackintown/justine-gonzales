import Image from "next/image";

const FeaturedProject = () => {
  return (
    <section className="relative w-full">
      <Image
        src="/images/featured-sec-bg.webp"
        alt="Anvaya Cove"
        fill
        className=""
        priority
      />
      {/* Overlay Layer */}
      <div className="absolute top-0 w-[50%] left-0 inset-0 bg-gradient-to-br from-black via-black/20 to-black/0 z-0"></div>

      <div className="relative container mx-auto px-6 pt-8 pb-8">
        <div className="py-6 md:py-5 masking_class  masking_class_2 absolute z-10 bg-black rounded-br-3xl">
          <h1 className="text-white z-20 mr-1 font-bold text-xl mb-1 leading-[1.0] sm:text-[2rem] lg:text-5xl xl:text-6xl">
            Featured
            <br /> <span className="ml-5 sm:ml-8">Projects</span>
          </h1>
          <p className="text-white text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] xl:text-[0.8rem]">
            Discover what&apos;s in store for you
          </p>
        </div>
        <div className="relative w-full h-[200px] sm:h-[230px] md:h-[300px] lg:h-[400px] xl:h-[450px] rounded-3xl overflow-hidden">
          {/* Gradient Corner Overlay */}
          <div className="absolute bottom-0 right-0 w-full h-full z-10 bg-gradient-to-l from-black/80 via-transparent to-transparent"></div>
          <div className="absolute w-full h-full  z-0">
            <Image
              src="/images/anvaya-cove-bg.webp"
              alt="Anvaya Cove"
              fill
              className=""
              priority
            />
          </div>
          <div className="absolute top-8 right-8 z-10 max-w-[130px] w-full">
            <div className="relative">
              <Image
                src="/images/location-frame.webp"
                width={500}
                height={500}
                quality={75} // Balanced quality for smaller file size
                loading="lazy"
                alt="location-frame"
              />
              <p className="absolute left-6 inset-0 flex  items-center text-white text-xs font-semibold">
                Morong, Bataan
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 lg:bottom-11 z-10 right-6 flex flex-col items-end text-white">
            <h2 className="text-3xl font-bold mb-1 lg:text-5xl">Anvaya Cove</h2>
            <p className="text-[0.5rem] sm:text-xs  sm:max-w-lg max-w-md w-full text-right mb-2">
              Presenting the excitement of a seaside resort and the tranquility
              of a mountain retreat,
              <br /> unique tropical features provide residents with the best
              that nature has to offer.
            </p>
            <button className="max-w-[100px]">
              <Image
                src="/images/learn-more-btn.webp"
                width={500}
                height={500}
                alt="learn-more-btn"
              />
            </button>
          </div>
        </div>
        <div className="relative my-5 w-full h-[200px] sm:h-[230px] md:h-[300px] lg:h-[400px] xl:h-[450px] rounded-3xl overflow-hidden">
          {/* Gradient Corner Overlay */}
          <div className="absolute bottom-0 right-0 w-full h-full z-10 bg-gradient-to-l from-black/80 via-transparent to-transparent"></div>
          <div className="absolute w-full h-full z-0">
            <Image
              src="/images/miravera-hillestate.webp"
              alt="Anvaya Cove"
              fill
              className=""
              priority
            />
          </div>
          <div className="absolute top-8 right-8 z-10 max-w-[130px] w-full">
            <div className="relative">
              <Image
                src="/images/location-frame.webp"
                width={500}
                height={500}
                alt="location-frame"
              />
              <p className="absolute left-5 inset-0 flex  items-center text-white text-xs font-semibold">
                San Jose Bulacan
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 lg:bottom-11 z-10 right-6 flex flex-col items-end text-white">
            <h2 className="text-3xl font-bold mb-1 lg:text-5xl">
              Miravera Altaraza
            </h2>
            <p className="text-[0.5rem] sm:text-xs  sm:max-w-lg max-w-md w-full text-right mb-2">
              Built around the natural environment instead of altering it, the
              village takes advantage of the undulating terrain by maintaining
              the site&apos;s ridges and waterways.
            </p>
            <button className="max-w-[100px]">
              <Image
                src="/images/learn-more-btn.webp"
                width={500}
                height={500}
                quality={75} // Reduced quality for optimization
                loading="lazy" // Lazy load images
                alt="learn-more-btn"
              />
            </button>
          </div>
        </div>
        <div className="relative w-full h-[200px] sm:h-[230px] md:h-[300px] lg:h-[400px] xl:h-[450px] rounded-3xl overflow-hidden">
          {/* Gradient Corner Overlay */}
          <div className="absolute bottom-0 right-0 w-full h-full z-10 bg-gradient-to-l from-black/80 via-transparent to-transparent"></div>
          <div className="absolute w-full h-full z-0">
            <Image
              src="/images/azuela-cove.webp"
              alt="Anvaya Cove"
              fill
              quality={75}
              className=""
              priority
            />
          </div>
          <div className="absolute top-8 right-8 z-10 max-w-[130px] w-full">
            <div className="relative">
              <Image
                src="/images/location-frame.webp"
                width={500}
                height={500}
                quality={75}
                loading="lazy"
                alt="location-frame"
              />
              <p className="absolute left-8 inset-0 flex  items-center text-white text-xs font-semibold">
                Davao City
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 lg:bottom-11 z-10 right-6 flex flex-col items-end text-white">
            <h2 className="text-3xl font-bold mb-1 text-right lg:text-5xl leading-[1.0]">
              The Residence at Azuela Cove
            </h2>
            <p className="text-[0.5rem] sm:text-xs  sm:max-w-lg max-w-md w-full text-right mb-2">
              A vibrant destination where people and pursuits flow. A dynamic
              hub undulating spaces for leisure and activity, recreation and
              entertainment, business and home.
            </p>
            <button className="max-w-[100px]">
              <Image
                src="/images/learn-more-btn.webp"
                width={500}
                height={500}
                quality={75}
                loading="lazy"
                alt="learn-more-btn"
              />
            </button>
          </div>
        </div>
        <p className="mt-5 text-white text-[0.6rem] sm:text-xs  text-center px-4 max-w-2xl xl:max-w-3xl mx-auto">
          From high-rise condominiums to suburban environments and leisure
          communities, Ayala Land Premier developments are true testaments to
          high-quality living. Heralded for their prestige, choice location, and
          unrivaled land value appreciation, each development guarantees prime
          locations and desired addresses.
        </p>
      </div>
    </section>
  );
};

export default FeaturedProject;
