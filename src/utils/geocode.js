const request = require("request");
const api = require("../.env");

const _API_KEY = api.apikey;
const geocode = (address, callback) => {
  const url = "http://api.openweathermap.org/geo/1.0/direct?q=" + encodeURIComponent(address) + "&limit=1&appid="
    + _API_KEY;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the location service", undefined);
    } else if (body.length === 0) {
      callback("Unable to find given location, try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body[0].lat,
        longitude: body[0].lon,
        location: body[0].name,
      });
    }
  });
};

module.exports = {
  geocode: geocode,
};
