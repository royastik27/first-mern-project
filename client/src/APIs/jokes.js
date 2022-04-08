import React from "react";
import ReactDOM from "react-dom";

const axios = require("axios");

async function getJokes() {
  let joke;
  try {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    joke = response.data.value;
  } catch (error) {
    console.error(error);
  }

  return joke;
}

const downloadJoke = () => {
  getJokes().then((joke) => {
    ReactDOM.render(<span>{joke}</span>, document.getElementById("joke"));
  });
};

export default downloadJoke;

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
