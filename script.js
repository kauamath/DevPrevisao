let key = "5414542d9e0a55b4a6e025d9e5c36fb6";

function putOnScreen(data){

    console.log(data)

    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp)  + "°C"
    document.querySelector(".description").innerHTML = data.weather[0].description
    document.querySelector(".umidity").innerHTML = "Umidade: " + data.main.humidity + "%"
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
    
}

async function seekCity(city) {
  let data = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      key +
      "&lang=pt_br" +
      "&units=metric"
  ).then((response) => response.json());

  putOnScreen(data)
}

function clickButton() {
  let city = document.querySelector(".input-city").value;

  seekCity(city);
}
