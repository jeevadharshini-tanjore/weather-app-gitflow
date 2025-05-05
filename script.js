let useCelsius = true;

async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "fb0e21595ff6125c4aed21ef4fba3225";
  const unit = useCelsius ? "metric" : "imperial";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  if (data.cod === 200) {
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const unitSymbol = useCelsius ? "°C" : "°F";
    document.getElementById("weather-result").innerHTML =
      `Temperature: ${temp}${unitSymbol}<br/>Condition: ${desc}`;
  } else {
    document.getElementById("weather-result").innerHTML = "City not found!";
  }
}

// This function should be outside
function toggleUnit() {
  useCelsius = !useCelsius;
  const city = document.getElementById("city").value;
  if (city) {
    getWeather(); // re-fetch in new unit
  }
}
