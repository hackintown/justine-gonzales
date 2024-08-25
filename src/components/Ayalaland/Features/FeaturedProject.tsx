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
      <div className="relative container mx-auto px-6">
        <div className="py-5">
          <h1 className="text-white text-3xl">Featured Projects</h1>
          <p className="text-white text-lg">Discover what’s in store for you</p>
        </div>
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          <div className="absolute w-full h-full clip-path-custom">
            <Image
              src="/images/anvaya-cove-bg.jpg"
              alt="Anvaya Cove"
              layout="fill"
              objectFit="cover"
              className=""
              priority
            />
          </div>
          <div className="absolute bottom-4 right-6 flex flex-col items-end text-white">
            <h2 className="text-3xl font-semibold">Anvaya Cove</h2>
            <p className="mt-2 text-sm max-w-md text-right">
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
            <div className="mt-4 flex items-center space-x-2">
              <span className="inline-block p-2 bg-gray-800 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.75 11.25a6 6 0 11-11.5 0 6 6 0 0111.5 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v1.5M12 7.5h.01M7.5 7.5h.01M9.75 9.75l.01.01M14.25 9.75l.01.01"
                  />
                </svg>
              </span>
              <span>Morong, Bataan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
