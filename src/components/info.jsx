import React from "react";

const lightInfoMap = {
  red: {
    title: "Red Light",
    description: "Stop immediately. Vehicles must wait behind the stop line. This light helps prevent collisions and keeps pedestrians safe.",
    colorClass: "text-red-500",
  },
  yellow: {
    title: "Yellow Light",
    description: "Get ready to stop. The yellow light warns that the signal is about to turn red. Slow down and prepare to halt.",
    colorClass: "text-yellow-400",
  },
  green: {
    title: "Green Light",
    description: "Go ahead. Vehicles can move through the intersection, but always yield to pedestrians and other vehicles already in the intersection.",
    colorClass: "text-green-500",
  },
};

const Info = ({ activeLight }) => {
  if (!lightInfoMap[activeLight]) return null;

  const { title, description, colorClass } = lightInfoMap[activeLight];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-md text-center">
      <h2 className={`text-2xl font-bold mb-2 ${colorClass}`}>{title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default Info;
 