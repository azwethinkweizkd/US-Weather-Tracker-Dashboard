//VARIABLE DECLARATIONS
let searchedCity = "";
const input = document.querySelector("input");
input.addEventListener("change", updateValue);
function updateValue(e) {
  searchedCity = e.target.value;
}
let currentDay = $("#currentDay");
let day1 = $("#day1");
let day2 = $("#day2");
let day3 = $("#day3");
let day4 = $("#day4");
let day5 = $("#day5");
let prevCities = $("#searchedCities");
let apiKey = "6c8630dd1cedef282abf5478eb1393ca";
//FUNCTIONS
//I need a function that will call the Open Weather API

//In this function I will need to call for the correct city from the what the user input

function getAPI() {
  let requestURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&appid=${apiKey}&units=imperial`;

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let cityDay = $("<h4>");
        let temp = $("<p>");
        let wind = $("<p>");
        let humid = $("<p>");
        let uvI = $("<p>");

        cityDay.textcontent = data.city.name + data.list[i].dt_text;
        temp.textcontent = data.list[i].main.temp;
      }
    });
}

//EVENT HANDLERS

//I will need to make an event listenener that will be attached to the search button.

//This search button will do 2 things: save the searched city to localStorage, getAPI from Open Weather to display the searched city on the screen.

$(".searchBtn").on("click", function (event) {
  event.preventDefault();

  getAPI();
});

console.log(searchedCity);
