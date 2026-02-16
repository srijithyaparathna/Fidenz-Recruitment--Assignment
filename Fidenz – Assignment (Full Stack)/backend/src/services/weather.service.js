
const fs = require('fs');


const path = require('path');


const {get} = require('../utils/httpClient');

require('dotenv').config();


const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;


const { computeComfortIndex } = require('../services/comfortIndex.service');


const { getCache, setCache, cacheStatus } = require('../services/cache.service');


const citiesFile = path.join(__dirname,'../data/cities.json');

const cities = JSON.parse(
  fs.readFileSync(citiesFile, 'utf8')
).List;





const fetchWeatherForCity = async (city) => {


  const url = `https://api.openweathermap.org/data/2.5/weather?id=${city.CityCode}&appid=${process.env.OPENWEATHER_API_KEY}`;

  
  const data = await get(url);


  return {
    cityName: city.CityName,
    temp: Math.round(data.main.temp-273.15),
    status: data.weather[0].main,
    windSpeed: data.wind.speed,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    sea_level: data.main.sea_level,
    grnd_level: data.main.grnd_level

  };
};



// ---------------- MAIN function ----------------
const getWeatherData = async () => {

  const cacheKey = 'weatherData';


  const cached = getCache(cacheKey);
  if (cached) return cached;

  const results = [];

  for (const city of cities) {

    const weather = await fetchWeatherForCity(city);
    console.log('Weather for', city.CityName, weather); 
    const comfortScore = computeComfortIndex(weather);

    results.push({
      cityName: weather.cityName,
      temp: weather.temp,
      status: weather.status,
      pressure: weather.pressure,
    sea_level: weather.sea_level,
    grnd_level: weather.grnd_level,
    comfortScore
    });
  }


  results.sort((a, b) => b.comfortScore - a.comfortScore);

 
  results.forEach((item, index) => {
    item.rank = index + 1;
  });

  
  setCache(cacheKey, results);

  return results;
};

module.exports = { getWeatherData };