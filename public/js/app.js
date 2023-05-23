console.log("Client side JS file is loaded");

const weatherform = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherform.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  fetch("http://localhost:3000/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = "The humidity in " + data.location + " is " + data.humidity
          + "% at a current temperature of " + data.temperature + " degree C. The weather condition is described as: "
          + data.description.toUpperCase();
        console.log(data.description);
        console.log(data.humidity);
        console.log(data.temperature);
        console.log(data.location);
      }
    });
  });
});
