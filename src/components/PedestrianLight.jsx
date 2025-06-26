import React from "react";

const PedestrianLight = ({ isWalk = false }) => {
  return (
    <div
      className={`w-28 h-12 flex items-center justify-center rounded-lg text-white font-bold border-2 shadow-inner ${
        isWalk ? "bg-green-500" : "bg-red-600"
      }`}
    >
      {isWalk ? "WALK" : "STOP"}
    </div>
  );
};

export default PedestrianLight;