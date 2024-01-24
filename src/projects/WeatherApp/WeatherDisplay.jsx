import React from "react";
import mist from "./Icons/icons-haze.png";
import clear_sky from "./Icons/icons-sun.png";
import rain from "./Icons/icons-rainfall.png";
import thunderstorm from "./Icons/icons-cloud-lightning.png";
import few_cloud from "./Icons/icons-cloud.png";
import snow from "./Icons/icons-snow.png";
const WeatherDisplay = ({ weather, backToForm }) => {
  return (
    <div className="rounded-md border border-transparent  w-[30%]  bg-slate-600 ">
      <div className="flex  bg-slate-500  p-5 justify-between border-b border-slate-600">
        <button
          onClick={backToForm}
          className="bg-blue-600 hover:bg-blue-700 border-blue-700 border rounded-md shadow-sm px-3 py-1 text-sm font-semibold"
        >
          Back
        </button>
        <p className="flex-1 text-center text-2xl font-bold ">
          Coder's Weather App
        </p>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-center my-4  w-full">
          <img
            className="object-cover w-[60px] h-[60px]"
            src={`${
              weather?.weather[0]?.description === "mist"
                ? mist
                : weather?.weather[0]?.description === "clear sky"
                ? clear_sky
                : weather?.weather[0]?.description === "rain"
                ? rain
                : weather?.weather[0]?.description === "thunderstorm"
                ? thunderstorm
                : weather?.weather[0]?.description === "few cloud"
                ? few_cloud
                : snow
            }`}
            alt=""
          />
        </div>

        <p className="text-8xl text-center font-semibold text-white">
          {Math.round(weather?.main.temp)}&deg;C
        </p>
        <div className="flex items-center justify-center my-2 ">
          <i className="fas fa-map-marker text-2xl mr-3 text-white"></i>
          <p className="text-2xl font-semibold">
            {weather?.name}, {weather?.sys.country}
          </p>
        </div>
        <div className="flex px-2 mt-2 py-2 justify-between border-t border-slate-500">
          <div className="border-r border-slate-500 flex-1 items-center justify-around flex">
            <div>
              <i className="fa fa-thermometer-full  text-blue-400 text-5xl "></i>
            </div>
            <div>
              <p>{Math.round(weather?.main.temp)}&deg;C</p>
              <p>Feels Like</p>
            </div>
          </div>
          <div className="border-r border-slate-500 flex-1 items-center justify-around flex">
            <div>
              <i className="fa fa-cloud  text-blue-400 text-5xl "></i>
            </div>
            <div>
              <p>{weather?.main.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className=" flex-1 items-center justify-around flex">
            <div>
              <i className="fa fa-thermometer  text-blue-400 text-5xl "></i>
            </div>
            <div>
              <p>{weather?.main.temp_min}&deg;C </p>
              <p>Temp. Min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
