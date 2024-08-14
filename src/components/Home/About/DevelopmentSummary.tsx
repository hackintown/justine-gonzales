import React from "react";

const DevelopmentSummary: React.FC = () => {
  return (
    <div className="pt-5">
      <h2 className="text-2xl font-bold mb-2 text-white">
        Development Summary
      </h2>

      <div className="flex flex-wrap gap-1">
        <div className="rounded-lg bg-[#635e41] px-2 py-1 mx-1 my-1">
          <p className="text-white font-semibold">Location</p>
        </div>
        <div className="rounded-lg bg-[#635e41] px-2 py-1 mx-1 my-1">
          <p className="text-white">Morong, Bataan</p>
        </div>
      </div>

      <div className="flex w-full flex-wrap">
        <div className="rounded-lg bg-[#635e41] px-2 py-1 mx-1 my-1">
          <p className="text-white">Land Area</p>
        </div>
        <div className="rounded-lg bg-[#635e41] px-2 py-1 mx-1 my-1">
          <p className="text-white">620 hectares</p>
        </div>
      </div>

      <div className="flex w-full flex-wrap">
        <div className="rounded-lg bg-[#635e41] px-2 py-1 mx-1 my-1">
          <p className="text-white">Coast Line</p>
        </div>
        <div className="rounded-lg bg-[#635e41] px-2 py-1 mx-1 my-1">
          <p className="text-white">3.5 kilometers</p>
        </div>
      </div>

      <div className="flex w-full flex-wrap">
        <div className="rounded-lg bg-[#635e41] px-2 py-1 mx-1 my-1">
          <p className="text-white">Peak Elevation</p>
        </div>
        <div className="rounded-lg bg-[#635e41] px-2 py-1 mx-1 my-1">
          <p className="text-white">130 meters above mean sea level</p>
        </div>
      </div>

      <div className="flex w-full flex-wrap">
        <div className="rounded-lg bg-[#635e41] px-2 py-1 mx-1 my-1">
          <p className="text-white">Density</p>
        </div>
        <div className="rounded-lg bg-[#635e41] px-2 py-1 mx-1 my-1">
          <p className="text-white">6 to 13 lots per hectare</p>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSummary;
