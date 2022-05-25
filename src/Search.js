import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

import "./Search.css";

export default function Search() {
  let [citySearch, setCitySearch] = useState("");
  let [humidity, setHumidity] = useState(56);
  let [windSpeed, setWindSpeed] = useState(4);
  let [icon, setIcon] = useState("");
  let [temperature, setTemperature] = useState(24);
  let [condition, setCondition] = useState("A little cloudy...");
  let [city, setCity] = useState("Tokyo");
  let [country, setCountry] = useState("JP");

  let apiKey = "c7bf51f65e9f2e6e240717c3f7dc5bf8";
  let unit = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=${unit}`;

  function changeCity(event) {
    setCitySearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(url).then(getWeather);
  }

  function getWeather(response) {
    console.log(response);
    setHumidity(response.data.main.humidity);
    setWindSpeed(response.data.wind.speed);
    setTemperature(Math.round(response.data.main.temp));
    setCondition(response.data.weather[0].main);
    setCity(response.data.name);
    setCountry(response.data.sys.country);
  }
  return (
    <div className="Search">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="search"
          placeholder="How's the weather in"
          onChange={changeCity}
          className="searchInput"
        />
        <input type="submit" value="Show me!" className="submitInput" />
      </form>
      <div className="currentWeather">
        <div className="currentWeatherIcon">
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="white"
            size="150"
            animate="true"
          />
        </div>
        <div className="currentTemp">{temperature}°C</div>
        <div className="currentCondition">{condition}</div>
        <div className="currentConditions">
          Humidity: {humidity}% <br />
          Windspeed: {windSpeed}km/h
        </div>
        <div className="city">
          {city}, {country}
        </div>
      </div>
    </div>
  );
}
