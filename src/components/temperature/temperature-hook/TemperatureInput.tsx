import React, { useState, useEffect, memo } from "react";
import { tryConvert2 } from "../Function";
import * as constants from "../ScaleName";

type MenuItemProps = {
  temperature: any;
  scale: string
  type: string
  onTemperatureChange: any
}

function TemperatureInput(props: MenuItemProps) {
  const [scaleNames, setScaleNames] = useState({});
  const [temperature, setTemperature] = useState("");

  useEffect(() => {
    setTemperature(tryConvert2(props.temperature, props.scale, props.type));
  }, [props.temperature, props.scale, props.type]);
  
  useEffect(() => {
    setScaleNames(constants.SCALE_NAMES);
  }, []);

  const handleChange = (e: any) => {
    setTemperature(e.target.value);
    props.onTemperatureChange({
      temperature: e.target.value,
      scale: props.type,
    });
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames ?? scaleNames[props.scale]}:</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default memo(TemperatureInput);
