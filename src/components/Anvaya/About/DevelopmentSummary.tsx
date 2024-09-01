import React from "react";
import SocialIcons from "../../ui/Icons/SocialIcons";
import { NAVBARCONSTANT } from "@/components/ui/Navbar/constants";

interface DevelopmentSummaryProps {
  param: string;
}

interface DevelopmentData {
  id: string;
  location: string;
  landArea?: string;
  numberOfPhases?: number;
  peakElevation?: string;
  developmentSummary?: any;
}

const SummaryItem: React.FC<{ label: string; value?: string }> = ({
  label,
  value,
}) => {
  if (!value) return null;

  return (
    <div className="flex">
      <div className="max-w-[125px] xl:max-w-[150px] w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
        <p className="text-white text-xs sm:text-sm md:text-xs lg:text-sm">
          {label}
        </p>
      </div>
      <div className="w-full rounded-lg bg-[#635e41] px-2 py-2 mx-1 my-1">
        <p className="text-white text-xs font-light sm:text-sm md:text-xs lg:text-sm">
          {value}
        </p>
      </div>
    </div>
  );
};

const DevelopmentSummary: React.FC<DevelopmentSummaryProps> = ({ param }) => {
  const data = NAVBARCONSTANT.find((item) => item.id === param) as
    | DevelopmentData
    | undefined;

  if (!data) return null;

  const {
    location,
    landArea,
    numberOfPhases,
    peakElevation,
    developmentSummary,
  } = data;

  return (
    <div className="pt-5">
      <h2 className="text-2xl lg:text-3xl font-bold mb-4 md:mb-2 text-white">
        Development Summary
      </h2>
      <div className="flex justify-between lg:justify-start lg:gap-x-8">
        <div className="max-w-[80%] w-full">
          <SummaryItem label="Location" value={location} />
          <SummaryItem
            label="Floor"
            value={developmentSummary?.olive?.floors}
          />
          <SummaryItem label="Units" value={developmentSummary?.olive?.units} />
          <SummaryItem
            label="Units Size Range"
            value={developmentSummary?.olive?.unitSizeRange}
          />
          <SummaryItem label="Land Area" value={landArea} />
          <SummaryItem
            label="Open Spaces"
            value={developmentSummary?.openSpaces}
          />
          <SummaryItem
            label="No Of Lots"
            value={developmentSummary?.numberOfLots}
          />
          <SummaryItem label="Density" value={developmentSummary?.density} />
          <SummaryItem
            label="Average Lot Size"
            value={developmentSummary?.averageLotSize}
          />
          <SummaryItem
            label="Lot Size Range"
            value={developmentSummary?.lotSizeRange}
          />
          <SummaryItem label="Terrain" value={developmentSummary?.terrain} />
          <SummaryItem
            label="Total No Of Units"
            value={developmentSummary?.molave?.totalNoOfUnits}
          />
          <SummaryItem
            label="Coastline"
            value={developmentSummary?.coastline}
          />
          <SummaryItem
            label="No. Of Phases"
            value={numberOfPhases?.toString()}
          />
          <SummaryItem label="Peak Elevation" value={peakElevation} />
          <SummaryItem
            label="Density"
            value={developmentSummary?.molave?.density}
          />
          <SummaryItem
            label="Unit Configuration"
            value={developmentSummary?.molave?.unitConfigurations}
          />
          <SummaryItem
            label="Unit Size Range"
            value={developmentSummary?.molave?.unitSizeRange}
          />
          <SummaryItem
            label="Floor"
            value={developmentSummary?.northTower?.floors}
          />
          <SummaryItem
            label="Units"
            value={developmentSummary?.northTower?.units}
          />
          <SummaryItem
            label="Density"
            value={developmentSummary?.northTower?.density}
          />
          <SummaryItem
            label="Units Size Range"
            value={developmentSummary?.northTower?.unitSizeRange}
          />
          <SummaryItem
            label="No Of Floors"
            value={developmentSummary?.numberOfFloors}
          />
          <SummaryItem
            label="No Of Units"
            value={developmentSummary?.numberOfUnits}
          />
          <SummaryItem
            label="Unit Size Range"
            value={developmentSummary?.unitSizeRange}
          />

          <SummaryItem
            label="Development Type"
            value={developmentSummary?.developmentType}
          />
          <SummaryItem
            label="Floor Area Ratio"
            value={developmentSummary?.floorAreaRatio}
          />
          <SummaryItem
            label="No Of Office Units"
            value={developmentSummary?.numberOfOfficeUnits}
          />
          {developmentSummary?.numberOfOfficeFloors && (
            <div className="">
              <h1 className="text-white text-xs px-2 my-2 font-semibold sm:text-sm md:text-xs lg:text-sm text-nowrap">
                Number Of Office Floors
              </h1>
              <SummaryItem
                label="Executive Zone"
                value={developmentSummary?.numberOfOfficeFloors?.executiveZone}
              />
              <SummaryItem
                label="High Zone"
                value={developmentSummary?.numberOfOfficeFloors?.highZone}
              />
              <SummaryItem
                label="Mid Zone"
                value={developmentSummary?.numberOfOfficeFloors?.midZone}
              />
              <SummaryItem
                label="No Of Office Units Per Floors"
                value={developmentSummary?.numberOfOfficeUnitsPerFloor}
              />
              <SummaryItem
                label="Building Height"
                value={developmentSummary?.buildingHeight}
              />
            </div>
          )}
        </div>
        <div className="flex my-1 max-w-[50px] w-full bg-[#5c6035] rounded-lg ">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSummary;
