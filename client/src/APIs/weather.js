import React from "react";
import ReactDOM from "react-dom";

const axios = require("axios");

async function getWeather(location) {
  let weather;

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=738705a0f08299c0c19682eb32f028ee`
  );

  weather = response.data.weather[0].description + " - " + response.data.name;

  return weather;
}

const downloadWeather = (location) => {
  getWeather(location).then((weather) => {
    ReactDOM.render(<span>{weather}</span>, document.getElementById("weather"));
  });
};

const getLocation = () => {
  let weather;

  try {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let location = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };

        weather = downloadWeather(location);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  } catch (error) {
    console.error(error);
  }

  return weather;
};

export default getLocation;

// var options = {
//   method: 'GET',
//   url: 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf',
//   headers: {
//     'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
