import React from "react";
import Button from "./Button";

const Controls = ({ onManual, onResume, onToggleNight, nightMode }) => (
  <div className="flex flex-wrap justify-center gap-3 mt-4">
    <Button text="Red" colorClass="bg-red-500 text-white" onClick={() => onManual("red")} />
    <Button text="Yellow" colorClass="bg-yellow-400 text-black" onClick={() => onManual("yellow-after-red")} />
    <Button text="Green" colorClass="bg-green-500 text-white" onClick={() => onManual("green")} />
    <Button text="Resume Auto" colorClass="bg-blue-600 text-white" onClick={onResume} />
    <Button
      text={nightMode ? "Exit Night Mode" : "Night Mode"}
      colorClass={nightMode ? "bg-gray-100 text-black" : "bg-black text-white"}
      onClick={onToggleNight}
    />
  </div>
);

export default Controls;
