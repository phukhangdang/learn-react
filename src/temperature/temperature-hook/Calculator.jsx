import React, { useCallback, useState } from "react";
import TemperatureInput from "./TemperatureInput.jsx";
import { BoilingVerdict } from "../BoilingVerdict.jsx";

function Calculator() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("");

  const handleTemperatureChange = useCallback((event) => {
    setTemperature(event.temperature);
    setScale(event.scale);
  }, []);

  return (
    <div>
      <TemperatureInput
        type="c"
        scale={scale}
        temperature={temperature}
        onTemperatureChange={handleTemperatureChange}
      />
      <TemperatureInput
        type="f"
        scale={scale}
        temperature={temperature}
        onTemperatureChange={handleTemperatureChange}
      />
      <BoilingVerdict celsius={parseFloat(temperature)} />
    </div>
  );
}

export default Calculator;
