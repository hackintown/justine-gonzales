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

// Function to convert camelCase or similar keys to a readable format
const formatKey = (key: string): string => {
  // Replace camelCase with space and capitalize words
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camel case words
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
};

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
  // Find the specific item based on `param`
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

  const renderSummaryItem = (key: string, value: any) => {
    if (value === null || value === undefined) return null;

    return (
      <SummaryItem
        key={key}
        label={formatKey(key)}
        value={typeof value === "string" ? value : JSON.stringify(value)}
      />
    );
  };

  return (
    <div className="pt-5">
      <h2 className="text-2xl lg:text-3xl font-bold mb-4 md:mb-2 text-white">
        Development Summary
      </h2>
      <div className="flex justify-between lg:justify-start lg:gap-x-8">
        <div className="max-w-[80%] w-full">
          {location && <SummaryItem label="Location" value={location} />}
          {landArea && <SummaryItem label="Land Area" value={landArea} />}
          {peakElevation && (
            <SummaryItem label="Peak Elevation" value={peakElevation} />
          )}
          {numberOfPhases && (
            <SummaryItem
              label="Number of Phases"
              value={numberOfPhases.toString()}
            />
          )}

          {/* Handle developmentSummary if present */}
          {developmentSummary &&
          typeof developmentSummary === "object" &&
          !Array.isArray(developmentSummary)
            ? Object.entries(developmentSummary).map(([key, value]) =>
                typeof value === "object" ? (
                  Object.entries(value as any).map(([subKey, subValue]) => (
                    <SummaryItem
                      key={subKey}
                      label={formatKey(subKey)}
                      value={
                        typeof subValue === "string"
                          ? subValue
                          : JSON.stringify(subValue)
                      }
                    />
                  ))
                ) : (
                  <SummaryItem
                    key={key}
                    label={formatKey(key)}
                    value={
                      typeof value === "string" ? value : JSON.stringify(value)
                    }
                  />
                )
              )
            : null}

          {/* Handle developmentSummary if it's an array */}
          {developmentSummary && Array.isArray(developmentSummary)
            ? developmentSummary.map((summary, index) => (
                <div key={index} className="my-3">
                  {Object.entries(summary).map(([key, value]) => (
                    <SummaryItem
                      key={key}
                      label={formatKey(key)}
                      value={
                        typeof value === "string"
                          ? value
                          : JSON.stringify(value)
                      }
                    />
                  ))}
                </div>
              ))
            : null}
        </div>
        <div className="flex my-1 max-w-[50px] w-full bg-[#5c6035] rounded-lg ">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSummary;
