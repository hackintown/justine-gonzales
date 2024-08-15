import React from "react";
import SocialIcons from "./SocialIcons";

const DevelopmentSummary: React.FC = () => {
  return (
    <div className="pt-5">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Development Summary
      </h2>
      <div className="flex justify-between lg:justify-start lg:gap-x-8 ">
        <div className="max-w-[80%] w-full">
          <div className="flex">
            <div className="max-w-[125px] w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs sm:text-sm md:text-xs lg:text-sm">Location</p>
            </div>

            <div className="w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs font-light sm:text-sm md:text-xs lg:text-sm">Morong, Bataan</p>
            </div>
          </div>

          <div className="flex">
            <div className="max-w-[125px] w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs sm:text-sm md:text-xs lg:text-sm">Land Area</p>
            </div>

            <div className="w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs font-light sm:text-sm md:text-xs lg:text-sm">620 hectares</p>
            </div>
          </div>

          <div className="flex">
            <div className="max-w-[125px] w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs sm:text-sm md:text-xs lg:text-sm">Coast Line</p>
            </div>

            <div className="w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs font-light sm:text-sm md:text-xs lg:text-sm">3.5 kilometers</p>
            </div>
          </div>

          <div className="flex">
            <div className="max-w-[125px] w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs sm:text-sm md:text-xs lg:text-sm">Peak Elevation</p>
            </div>

            <div className="w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs font-light sm:text-sm md:text-xs lg:text-sm">
                130 meters above mean sea level
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="max-w-[125px] w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs sm:text-sm md:text-xs lg:text-sm">Density</p>
            </div>

            <div className="w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs font-light sm:text-sm md:text-xs lg:text-sm">
                6 to 13 lots per hectare
              </p>
            </div>
          </div>
        </div>

        <div className="flex my-1 max-w-[50px] w-full">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSummary;
