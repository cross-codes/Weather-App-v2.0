const path = require("path");
const express = require("express");
const hbs = require("hbs");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

// NOTE: The website is on http://localhost:3000/

const app = express();

const viewPath = path.join(__dirname, "../templates/views");
const publicPath = path.join(__dirname, "../public");
const partialPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewPath);
app.use(express.static(publicPath));
hbs.registerPartials(partialPath);

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Akshaj Rao",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Akshaj Rao",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "What a noob",
    title: "Help",
    name: "Akshaj Rao",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    error: "The requested help page was not found",
    header: "Error 404",
    name: "Akshaj Rao",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide a valid address",
    });
  } else {
    geocode.geocode(req.query.address, (error_g, { location, latitude, longitude } = {}) => {
      if (error_g) {
        return res.send({
          error: error_g,
        });
      }
      forecast.forecast(latitude, longitude, (error_w, { description, temperature, humidity } = {}) => {
        if (error_w) {
          return res.send({
            error: error_w,
          });
        }
        return res.send({
          location: location,
          description: description,
          temperature: temperature,
          humidity: humidity,
        });
      });
    });
  }
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  console.log(req.query);
  res.send({
    products: [],
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    header: "Error 404",
    error: "The requested page was not found",
    name: "Akshaj Rao",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
