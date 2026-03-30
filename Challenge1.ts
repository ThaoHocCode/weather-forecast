var todaysWeather = {
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
}

console.log(`1.Today high temperature is ${todaysWeather.temperature.high} degree`);
console.log(`2.Today low temperature is ${todaysWeather.temperature.low} degree`);
console.log(`3.Today weather condition is ${todaysWeather.conditions}`);
console.log(`4.The sun rises at ${todaysWeather.astronomy.sunrise} and sets at ${todaysWeather.astronomy.sunset}.`);
console.log(`5.It's currently ${todaysWeather.temperature.high} degrees. The sun rose this morning at ${todaysWeather.astronomy.sunrise} and will set at ${todaysWeather.astronomy.sunset}.`);