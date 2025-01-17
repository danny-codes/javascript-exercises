const convertToCelsius = function(temperature) {
  let toCelsiusFormula = (temperature - 32) * 5/9;
  let roundedResult = Math.round(toCelsiusFormula * 10) / 10;
  return roundedResult;
};

const convertToFahrenheit = function(temperature) {
  let toFahrenheitFormula = temperature * (9/5) + 32;
  let roundedResult = Math.round(toFahrenheitFormula * 10) / 10;
  return roundedResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
