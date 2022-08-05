import React, { useState } from "react";
import "./App.css";

const App = () => {
  const apiKey = "3eec5ad16314fee19e27c07aa9ce96af";
  const [weatherData, setWeatherdata] = useState([{}]);
  const [city, setCity] = useState("");
  const [weatherLogo, setWeatherLogo] = useState("");

  const cityHandler = (e) => {
    setCity(e.target.value);
  };

  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherdata(data);
        var logoUrl =
          "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        setWeatherLogo(logoUrl);
      });
  };
  return (
    <>
      <div className="col-sm-12 col-md-12 col-lg-12">
        <div className="mx-4 mt-4">
          <div className="row">
            <div className="mb-3 inputalign">
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
          <div className="container">
            <div className="row mt-4">
              <div className="col-md-4 col-sm-4 col-lg-4 intro">
                <div style={{ textAlign: "left" }}>
                  <p className="intro">Weather Website</p>
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
                  <h3>Place</h3>
                  <p>{weatherData.name}</p>
                  <h3>Temperature (&deg;C)</h3>
                  <p>{weatherData.main.temp} &deg;C</p>
                  <h3>Weather</h3>
                  <p>{weatherData.weather[0].main}</p>
                  <img src={weatherLogo} height="80" width="80"></img>
                </div>
              )}
              {typeof weatherData.main === "undefined" ? (
                <div
                  className="col-sm-4 col-md-4 col-lg-4"
                  style={{ textAlign: "center" }}
                >
                  <h2>Other Info</h2>
                  <div className="row mt-4">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <h4>Wind Speed</h4>
                      <p>-</p>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <h4>Hudmidity</h4>
                      <p>-</p>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <h4>Min Temperature</h4>
                      <p>-</p>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <h4>Max Temperature</h4>
                      <p>-</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="col-sm-4 col-md-4 col-lg-4"
                  style={{ textAlign: "center" }}
                >
                  <h2>Other Info</h2>
                  <div className="row mt-4">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <h4>Wind Speed</h4>
                      <p>{weatherData.wind.speed} km/h</p>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <h4>Hudmidity</h4>
                      <p>{weatherData.main.humidity} %</p>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <h4>Min Temperature</h4>
                      <p>{weatherData.main.temp_min} &deg;C</p>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <h4>Max Temperature</h4>
                      <p>{weatherData.main.temp_max} &deg;C</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
