import { useState } from "react";
import "./Weather.css";

function Weather() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function getWeather() {
    fetch(`https://wttr.in/${city}?format=j1`)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }

  let icon = "";

  if (weather) {
    const condition =
      weather.current_condition[0].weatherDesc[0].value;

    if (condition.includes("Sunny")) icon = "☀️";
    else if (condition.includes("Cloud")) icon = "☁️";
    else if (condition.includes("Rain")) icon = "🌧";
    else icon = "🌤";
  }

  return (
    <div className="weather-container">

      <h2>Weather App</h2>

      <input
        type="text"
        placeholder="Enter City"
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      {weather && (
        <div className="weather-box">

          <h1>{icon}</h1>

          <p>Temperature: {weather.current_condition[0].temp_C} °C</p>

          <p>Humidity: {weather.current_condition[0].humidity}</p>

          <p>
            Weather:{" "}
            {weather.current_condition[0].weatherDesc[0].value}
          </p>

        </div>
      )}

    </div>
  );
}

export default Weather;