import React, { useState } from "react";
import styles from "./App.modules.css";

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
      <div className="col-sm-12 col-md-12 col-lg-12">
        <div className="mx-4 mt-4" style={{ height: "100vh" }}>
          <div className="row">
            <div className="input-group mb-3" style={{ width: "30%" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter City.."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                onChange={cityHandler}
                value={city}
                style={{ textAlign: "center" }}
              />
              <button
                className="btn btn-outline-success"
                type="button"
                id="button-addon2"
                onClick={getWeather}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 col-sm-4 col-lg-4">
              <div style={{ textAlign: "center" }}>
                <h1>React Weather Website</h1>
                <p>
                  Welcome to weather app! Enter in a city to get the weather
                </p>
              </div>
            </div>
            {typeof weatherData.main === "undefined" ? (
              <div
                className="col-sm-4 col-md-4 col-lg-4"
                style={{ textAlign: "center" }}
              >
                <h2>City</h2>
                <p>-</p>
                <h2>Temperature (&deg;C)</h2>
                <p>-</p>
                <h2>Weather</h2>
                <p>-</p>
              </div>
            ) : (
              <div
                className="col-sm-4 col-md-4 col-lg-4"
                style={{ textAlign: "center" }}
              >
                <h2>Place</h2>
                <p>{weatherData.name}</p>
                <h2>Temperature (&deg;C)</h2>
                <p>{Math.round(weatherData.main.temp)} &deg;C</p>
                <h2>Weather</h2>
                <p>{weatherData.weather[0].main}</p>
              </div>
            )}
            {typeof weatherData.main === "undefined" ? (
              <div
                className="col-sm-4 col-md-4 col-lg-4"
                style={{ textAlign: "center" }}
              >
                <h2>Other </h2>
              </div>
            ) : (
              <div
                className="col-sm-4 col-md-4 col-lg-4"
                style={{ textAlign: "center" }}
              >
                <h2>Place</h2>
                <p>{weatherData.name}</p>
                <h2>Temperature (&deg;C)</h2>
                <p>{Math.round(weatherData.main.temp)} &deg;C</p>
                <h2>Weather</h2>
                <p>{weatherData.weather[0].main}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
