// TUPLES ...........

let eComItems: [string | number] = ["LAPTOP"];
let appDetails: [string, number, boolean];
appDetails = ["Nextjs", 2017, true];

/**
    appDetails = [2017, "NextJs", true];    INVALID DATA  
    Order of Tuple matters as it is structured like this
*/
console.log(appDetails);

const games: [string, string, number] = ["game1", "game2", 2];

type Coordinates = [number, number];
let pos: Coordinates = [10.5, 20.3];

// ENUMS ............

enum WeatherConditions {
  SUNNY,
  RAINY,
  CLOUDY,
  SNOWY,
}
// by default indexing starts from 0, if we don't give any values
console.log(WeatherConditions);

enum WeatherConditions1 {
  SUNNY = "Sunny",
  RAINY = "Rainy",
  CLOUDY = "Cloudy",
  SNOWY = "Snowy",
}

console.log(WeatherConditions1);

const currentWeather = WeatherConditions1.CLOUDY;
console.log(`the current weather in bangalore is ${currentWeather}`);
