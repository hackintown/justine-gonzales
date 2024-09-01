import React from "react";
import SocialIcons from "../../ui/Icons/SocialIcons";
import { NAVBARCONSTANT } from "@/components/ui/Navbar/constants";
interface DevelopmentSummaryProps {
  param: string;
}
const DevelopmentSummary: React.FC<DevelopmentSummaryProps> = ({ param }) => {
  const data = NAVBARCONSTANT.filter((data) => {
    return data.id === param;
  }) as any;

  return (
    <div className="pt-5">
      <h2 className="text-2xl lg:text-3xl font-bold mb-4 md:mb-2 text-white">
        Development Summary
      </h2>
      <div className="flex justify-between lg:justify-start lg:gap-x-8 ">
        <div className="max-w-[80%] w-full">
          <div className="flex">
            <div className="max-w-[125px] w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs sm:text-sm md:text-xs lg:text-sm">
                Location
              </p>
            </div>

            <div className="w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs font-light sm:text-sm md:text-xs lg:text-sm">
                {data[0].location}
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="max-w-[125px] w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs sm:text-sm md:text-xs lg:text-sm">
                Land Area
              </p>
            </div>

            <div className="w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs font-light sm:text-sm md:text-xs lg:text-sm">
                {data[0].landArea}
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="max-w-[125px] w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs sm:text-sm md:text-xs lg:text-sm">
                Coast Line
              </p>
            </div>

            <div className="w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs font-light sm:text-sm md:text-xs lg:text-sm">
                {data[0].developmentSummary?.coastline}
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="max-w-[125px] w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs sm:text-sm md:text-xs lg:text-sm">
                Peak Elevation
              </p>
            </div>

            <div className="w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs font-light sm:text-sm md:text-xs lg:text-sm">
                {data[0].peakElevation}
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="max-w-[125px] w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs sm:text-sm md:text-xs lg:text-sm">
                Density
              </p>
            </div>

            <div className="w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
              <p className="text-white text-xs font-light sm:text-sm md:text-xs lg:text-sm">
                {data[0].developmentSummary?.density}
              </p>
            </div>
          </div>
        </div>

        <div className="flex my-1 max-w-[50px] w-full bg-[#5c6035] rounded-lg ">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSummary;
