import { useState } from "react";
import Light from "./components/light";
import PedestrianLight from "./components/PedestrianLight";
import Controls from "./components/Controls";
import { useTrafficCycle } from "./hooks/useTrafficCycle";




function App() {
  const [manualMode, setManualMode] = useState(false);
  const [nightMode, setNightMode] = useState(false);

  const {
    activeLight,
    countdown,
    setActiveLight,
    startNightBlinking,
    stopNightBlinking,
  } = useTrafficCycle(manualMode, nightMode);

  const handleManualLight = (light) => {
    setNightMode(false);
    stopNightBlinking();
    setManualMode(true);
    setActiveLight(light);
  };

  const resumeAuto = () => {
    setManualMode(false);
    setNightMode(false);
    stopNightBlinking();
    setActiveLight("red");
  };

  const toggleNight = () => {
    const enteringNight = !nightMode;
    setNightMode(enteringNight);
    setManualMode(false);
    if (enteringNight) startNightBlinking();
    else stopNightBlinking();
  };

  return (
    <div className="flex justify-center items-center flex-col gap-4 h-screen bg-gray-800 w-screen">
      <h1 className="text-white text-2xl font-bold">
        🚦 Traffic Light Simulation
      </h1>

      <div className="flex flex-col gap-4 border-2 border-gray-600 p-4 rounded-lg bg-gray-900 shadow-lg shadow-gray-700">
        <Light
          color="red"
          isOn={activeLight === "red"}
          countdown={activeLight === "red" ? countdown : null}
          showCountDown={!manualMode && !nightMode}
        />
        <Light
          color="yellow"
          isOn={
            activeLight === "yellow-after-red" ||
            activeLight === "yellow-after-green"
          }
          countdown={
            activeLight === "yellow-after-red" ||
            activeLight === "yellow-after-green"
              ? countdown
              : null
          }
          showCountDown={!manualMode && !nightMode}
        />
        <Light
          color="green"
          isOn={activeLight === "green"}
          countdown={activeLight === "green" ? countdown : null}
          showCountDown={!manualMode && !nightMode}
        />
      
      </div>

      <PedestrianLight isWalk={activeLight === "red"} />

      <Controls
        onManual={handleManualLight}
        onResume={resumeAuto}
        onToggleNight={toggleNight}
        nightMode={nightMode}
      />
    </div>
  );
}

export default App;
