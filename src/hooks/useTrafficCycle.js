import { useEffect, useState, useRef } from "react";

export function useTrafficCycle(manualMode, nightMode) {
  const [activeLight, setActiveLight] = useState("red");
  const [countdown, setCountdown] = useState(3);
  const nightIntervalRef = useRef(null);

  useEffect(() => {
    if (manualMode || nightMode) return;

    let duration = 0;
    let nextLight = "";

    switch (activeLight) {
      case "red":
        duration = 3;
        nextLight = "yellow-after-red";
        break;
      case "yellow-after-red":
        duration = 1;
        nextLight = "green";
        break;
      case "green":
        duration = 3;
        nextLight = "yellow-after-green";
        break;
      case "yellow-after-green":
        duration = 1;
        nextLight = "red";
        break;
      default:
        duration = 3;
        nextLight = "red";
    }

    setCountdown(duration);
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          setActiveLight(nextLight);
          return duration;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [activeLight, manualMode, nightMode]);

  const startNightBlinking = () => {
    nightIntervalRef.current = setInterval(() => {
      setActiveLight((prev) => (prev === "yellow-after-red" ? "off" : "yellow-after-red"));
    }, 800);
  };

  const stopNightBlinking = () => {
    clearInterval(nightIntervalRef.current);
  };

  return {
    activeLight,
    countdown,
    setActiveLight,
    startNightBlinking,
    stopNightBlinking,
  };
}
