import Image from "next/image";

const FeaturedProject = () => {
  return (
    <section className="relative w-full h-[500px]">
      <Image
        src="/images/featured-sec-bg.png"
        alt="Anvaya Cove"
        layout="fill"
        objectFit="cover"
        className=""
        priority
      />
      {/* Overlay Layer */}
      <div className="absolute top-0 left-0 inset-0 bg-black bg-opacity-20 z-10"></div>
      <div className="relative container mx-auto px-6">
        <div className="py-5">
          <h1 className="text-white text-3xl">Featured Projects</h1>
          <p className="text-white text-lg">Discover what’s in store for you</p>
        </div>
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          {/* Gradient Corner Overlay */}
          <div className="absolute bottom-0 right-0 w-full h-full z-10 bg-gradient-to-l from-black/80 via-transparent to-transparent"></div>

          <div className="absolute w-full h-full clip-path-custom z-0">
            <Image
              src="/images/anvaya-cove-bg.jpg"
              alt="Anvaya Cove"
              layout="fill"
              objectFit="cover"
              className=""
              priority
            />
          </div>
          <div className="absolute bottom-4 z-50 right-6 flex flex-col items-end text-white">
            <h2 className="text-3xl font-semibold">Anvaya Cove</h2>
            <p className="mt-2 text-[0.6rem] max-w-md w-full text-right">
              Presenting the excitement of a seaside resort and the tranquility
              of a mountain retreat, unique tropical features provide residents
              with the best that nature has to offer.
            </p>
            <button className="mt-4 max-w-[100px]">
              <Image
                src="/images/learn-more-btn.png"
                width={500}
                height={500}
                alt="learn-more-btn"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
