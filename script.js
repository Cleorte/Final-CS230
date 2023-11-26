const todoList = document.getElementsByClassName("todoList")[0];
const addTodoInput = document.getElementById("addTodo");

addTodoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") addTodo();
});

function addTodo() {
  var divParent = document.createElement("div");
  var divChild = document.createElement("div");
  var checkIcon = document.createElement("i");
  var deleteIcon = document.createElement("i");

  divParent.className = "todo";
  divParent.innerHTML = addTodoInput.value;

  checkIcon.className = "fa-solid fa-check";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", function () {
    checkIcon.style.color = "limegreen";
    divParent.classList.toggle("completed");
  });

  divChild.appendChild(checkIcon);

  deleteIcon.className = "fa-solid fa-trash-can";
  deleteIcon.style.color = "darkgray";
  deleteIcon.addEventListener("click", function () {
    divParent.remove();
  });

  divChild.appendChild(deleteIcon);

  divParent.appendChild(divChild);

  todoList.appendChild(divParent);

  addTodoInput.value = "";
}

// weatherAPI
const apiKey = "de1c378b2c5dab90d660bae95d9f558c";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityname = document.querySelector(".search input");
const button = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");

async function checkweather(city) {
  const response = await fetch(
    apiUrl + city + `&appid=de1c378b2c5dab90d660bae95d9f558c`
  );
  
  var data = await response.json();


  // fetching the data from the API
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".feelsLike").innerHTML =
    "Feels Like " + Math.round(data.main.feels_like * 2 + 32) + " °F"; //rounding and changing temprature from C to F
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp * 2 + 32) + " °F"; //rounding and changing temprature from C to F
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " mph";

  // checking for weather to change images
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  }
  
  else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  }
  else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  }
  else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  }
  else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }
  else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
  }

  document.querySelector(".weather").style.display = "block";

}

//passing the city name to the weather function on events
button.addEventListener("click", () => {
  checkweather(cityname.value);
});

cityname.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkweather(cityname.value);
    }
  });
