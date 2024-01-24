import React, { useEffect, useState } from "react";
// 2c6e5d60253dbeaa8b8f001e60c0da3b
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");

  const handleClick = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2c6e5d60253dbeaa8b8f001e60c0da3b`
      );
      setWeather(data);
      setCity("");
      setIsError(false);
      if (data) {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setIsError(true);
      setError(
        error.response ? error.response.data.message : "An error occurred"
      );
      setTimeout(() => {
        setIsError(false);
        setError("");
        setCity("");
      }, 1300);
    }

    setButtonClicked(true);
  };
  const backToForm = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <>
      {buttonClicked && weather !== null ? (
        <WeatherDisplay weather={weather} backToForm={backToForm} />
      ) : (
        <div className="bg-slate-700 shadow-xl rounded-md flex flex-col items-center w-[20%] p-5">
          <p className="  mb-3 text-3xl font-semibold text-white">
            Weather App
          </p>
          {loading && (
            <p className="bg-green-300/50 text-green-300 font-semibold w-full px-2 py-2 text-center rounded-md ">
              Fetching Weather Details
            </p>
          )}
          {error && (
            <p className="bg-red-300/50 text-red-300 font-semibold w-full px-2 py-2 text-center rounded-md ">
              Error: {error}
            </p>
          )}
          <input
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="outline-none rounded-md my-2 px-2 py-2 bg-slate-600 border font-medium border-transparent hover:border-blue-600 w-[100%] "
          />
          <button
            onClick={handleClick}
            className={`px-3 py-2 my-2 text-base shadow-md ${
              city === "" && "pointer-events-none"
            } font-semibold text-white rounded-md w-[100%] bg-blue-600 hover:bg-blue-700 cursor-pointer`}
          >
            Check Weather
          </button>
        </div>
      )}
    </>
  );
};

export default WeatherApp;
