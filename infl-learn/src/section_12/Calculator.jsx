import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>물이 끓습니다.</p>;
  }
  return <p>물이 끓지않습니다.</p>;
};

const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) / 5 / 9;
};

const toFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

const tryconvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.inNan(input)) {
    return "";
  }

  const Calculator = (props) => {
    const [temperature, setTemperature] = useState();
    const [scale, setScale] = useState("C");

    const handleCelsiusChange = (temperature) => {
      setTemperature(temperature);
      setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
      setTemperature(temperature);
      setScale("f");
    };

    const celsius =
      scale === "f" ? tryconvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryconvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange}
        />
        <TemperatureInput
          scale="F"
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  };
};

export default Calculator;
