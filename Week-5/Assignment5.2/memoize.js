const temperatureData = {
  NewYork: 20,
  London: 18,
  Paris: 22,
  Tokyo: 25,
  Sydney: 28,
};

const temperatureCache = {};

function getTemperatureForCity(city) {
  if (temperatureCache[city]) {
    console.log(`Retrieved temperature for ${city} from cache`);
    return temperatureCache[city];
  }

  if (temperatureData[city] !== undefined) {
    temperatureCache[city] = temperatureData[city];
    console.log(`Retrieved temperature for ${city} from data`);
    return temperatureData[city];
  }

  console.log(`Temperature data not available for ${city}`);
  return null;
}

const temperature1 = getTemperatureForCity("NewYork");
console.log(temperature1); // 20

const temperature2 = getTemperatureForCity("NewYork");
console.log(temperature2); // 20 (retrieved from cache)

const temperature3 = getTemperatureForCity("London");
console.log(temperature3); // 18

const temperature4 = getTemperatureForCity("London");
console.log(temperature4); // 18 (retrieved from cache)
