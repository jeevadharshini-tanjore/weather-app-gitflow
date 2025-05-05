async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "fb0e21595ff6125c4aed21ef4fba3225";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    if (data.cod === 200) {
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      document.getElementById("weather-result").innerHTML = 
        `Temperature: ${temp}°C<br/>Condition: ${desc}`;
    } else {
      document.getElementById("weather-result").innerHTML = "City not found!";
    }
  }
  