import React from "react";
import SocialIcons from "./SocialIcons";

const DevelopmentSummary: React.FC = () => {
  return (
    <div className="pt-5">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Development Summary
      </h2>
      <div className="flex justify-between ">
        <div className="w-[85%]">
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <div className="rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
                <p className="text-white text-xs">Location</p>
              </div>
            </div>
            <div className="w-2/3">
              <div className="rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
                <p className="text-white text-xs font-light">Morong, Bataan</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/3">
              <div className="rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
                <p className="text-white text-xs">Land Area</p>
              </div>
            </div>
            <div className="w-2/3">
              <div className="rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
                <p className="text-white text-xs font-light">620 hectares</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/3">
              <div className="rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
                <p className="text-white text-xs">Coast Line</p>
              </div>
            </div>
            <div className="w-2/3">
              <div className="rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
                <p className="text-white text-xs font-light">3.5 kilometers</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/3">
              <div className="rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
                <p className="text-white text-xs">Peak Elevation</p>
              </div>
            </div>
            <div className="w-2/3">
              <div className="rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
                <p className="text-white text-xs font-light">
                  130 meters above mean sea level
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/3">
              <div className="rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
                <p className="text-white text-xs">Density</p>
              </div>
            </div>
            <div className="w-2/3">
              <div className="rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
                <p className="text-white text-xs font-light">
                  6 to 13 lots per hectare
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end my-1">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSummary;
