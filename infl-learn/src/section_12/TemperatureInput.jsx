const scaleNames = {
  c: "섭씨",
  f: "화씨",
};

function TemperatureInput(props) {
  const habdleChange = (event) => {
    props.onTemperatureChange(event.tartget.value);
  };

  return (
    <fieldset>
      <legend>온도 입력(단위 : {scaleNames[props.scale]});</legend>
      <input value={props.temperature} onchange={habdleChange} />
    </fieldset>
  );
}

export default TemperatureInput;
