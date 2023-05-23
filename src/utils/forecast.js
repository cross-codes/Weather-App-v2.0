const request = require("request");
const api = require("../.env");

const _API_KEY = api.apikey;

const forecast = (latitude, longitude, callback) => {
  const url = "http://api.openweathermap.org/data/2.5/weather?lat=" + encodeURIComponent(latitude) + "&lon="
    + encodeURIComponent(longitude)
    + "&units=metric&type=accurate&appid="
    + _API_KEY;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the weather service!", undefined);
    } else if (body.message) {
      callback("Unable to find given location", undefined);
    } else {
      callback(undefined, {
        description: body.weather[0].description,
        temperature: body.main.temp,
        humidity: body.main.humidity,
      });
    }
  });
};

module.exports = {
  forecast: forecast,
};
