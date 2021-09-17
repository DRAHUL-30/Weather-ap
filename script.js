let container = document.createElement("div");
container.className = "container-fluid";
let head = document.createElement("div");
head.className = "head";
head.innerHTML = `
<input type="text" class="city form-control me-2" placeholder="Enter your city here" />
<button class="search btn btn-outline-success" onclick="search()">Search</button>
`;
document.body.append(container);
container.append(head);

let cities = document.querySelector(".city");
let button = document.querySelector(".search");

// let city = "chennai";

let city = "salem";
getData();
async function getData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=367261ea67167733e6e17d88b7110e22`);
    const data = await response.json();
    getDetails(data);
    // console.log(data);
  } catch (err) {
    // console.log("Try again later");
    window.alert("Something went wrong!");
  }
}
function search() {
  city = cities.value;
  cities.value = "";
  getData();
}
function getDetails(data) {
//   console.log(data);

  let dateTime = new Date().toDateString();
  let cityName = data.name;
  console.log(cityName);
  let weatherState = data.weather[0].main;
  let temperature = Math.floor(data.main.temp);
  let windSpeed = data.wind.speed;
  let info = document.createElement("div");
//   console.log(cityName);
  info.className = "info";

  info.innerHTML = `<div>
                        <h1 class="time">${dateTime}</h1>
                    </div>
                    <div class="content">
                        <p class="temp">Area : <span id="area">${cityName}</span></p>
                        <p class="temp">Weather :<span id="wState">${weatherState}</span></p>
                        <p class="temp">Temperature : <span id="temp">${
                          temperature - 273
                        }</span></p>
                        <p class="temp">Wind : <span id="wind">${windSpeed}</span></p>
                    </div>
`;

  container.append(info);
}