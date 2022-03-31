import React, { useState, useEffect, memo } from "react";
import { tryConvert2 } from "../Function.jsx";
import * as constants from "../ScaleName.jsx";

function TemperatureInput(props) {
  const [scaleNames, setScaleNames] = useState(constants.SCALE_NAMES);
  const [temperature, setTemperature] = useState("");

  useEffect(() => {
    setTemperature(tryConvert2(props.temperature, props.scale, props.type));
  }, [props.temperature, props.scale]);

  const handleChange = (e) => {
    setTemperature(e.target.value);
    props.onTemperatureChange({
      temperature: e.target.value,
      scale: props.type,
    });
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default memo(TemperatureInput);
