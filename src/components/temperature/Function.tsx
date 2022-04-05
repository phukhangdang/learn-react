export function toCelsius(fahrenheit: any) {
  return ((fahrenheit - 32) * 5) / 9;
}

export function toFahrenheit(celsius: any) {
  return (celsius * 9) / 5 + 32;
}

export function tryConvert(temperature: any, convert: any) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export function tryConvert2(temperature: any, scale: any, type: any) {
  var converter;
  if (scale === "c" && type === "f") {
    converter = toFahrenheit;
  }

  if (scale === "f" && type === "c") {
    converter = toCelsius;
  }

  if (!converter) {
    return temperature;
  }

  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = converter(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
