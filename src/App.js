import React, { useState } from "react";
import "./App.css";

const App = () => {
  const apiKey = "3eec5ad16314fee19e27c07aa9ce96af";
  const [weatherData, setWeatherdata] = useState([{}]);
  const [city, setCity] = useState("");

  const cityHandler = (e) => {
    setCity(e.target.value);
  };

  const getWeather = (event) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherdata(data);
      });
  };
  return (
    <>
      <div>
        <input placeholder="Enter City.." onChange={cityHandler} value={city} />
        <button onClick={getWeather}>Submit</button>
      </div>
      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>Welcome to weather app! Enter in a city to get the weather</p>
        </div>
      ) : (
        <div>
          <p>{weatherData.name}</p>
          <p>{Math.round(weatherData.main.temp)} C</p>
          <p>{weatherData.weather[0].main}</p>
        </div>
      )}
    </>
  );
};

export default App;
