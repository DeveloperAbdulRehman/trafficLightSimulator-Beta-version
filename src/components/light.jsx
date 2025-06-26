import React from "react";

const Light = ({ color = "red", isOn = false, countdown = null, showCountDown = true}) => {
  const colorMap = {
    red: "bg-red-500",
    yellow: "bg-yellow-400",
    green: "bg-green-500",
  };

  const activeColor = isOn ? colorMap[color] : "bg-gray-800";

  return (
    <div className={`relative w-16 h-16 rounded-full border-4 border-white shadow-inner ${activeColor}`}>
      {isOn && countdown !== null && showCountDown  &&(
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
          {countdown}
        </span>
      )}
    </div>
  );
};

export default Light;