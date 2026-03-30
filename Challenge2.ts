var weatherForecast = [
 {
  day: "Today",
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
 },
 {
  day: "Saturday",
  temperature: {
    high: 50,
    low: 29
   },
  conditions: "cloudy",
  astronomy: {
    sunrise: "7:44 AM",
    sunset: "5:08 PM"
  }
 },
 {
  day: "Sunday",
  temperature: {
    high: 47,
    low: 35
   },
  conditions: "chance of rain",
  astronomy: {
    sunrise: "7:45 AM",
    sunset: "5:07 PM"
  }
 }
]
console.log(`1.Today's weather conditions are ${weatherForecast[0].conditions}`);
console.log(`2.Saturday's high temperature is ${weatherForecast[1].temperature.high} degrees.`);
console.log(`3.Saturday's sunrise time is ${weatherForecast[1].astronomy.sunrise}.`);
console.log(`4.Sunday's conditions are ${weatherForecast[2].conditions}`);
console.log(`5.Sunday's sunset time is ${weatherForecast[2].astronomy.sunset}.`);
console.log(`6.The high on ${weatherForecast[0].day} will be ${weatherForecast[0].temperature.high} and the low will be ${weatherForecast[0].temperature.low}. 
We're predicting a chance of ${weatherForecast[2].conditions}. The sun will rise at ${weatherForecast[2].astronomy.sunrise} and set at ${weatherForecast[2].astronomy.sunset}.`)