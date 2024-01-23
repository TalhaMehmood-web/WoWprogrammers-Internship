import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigators = [
    { text: "Alarm Clock", link: "" },
    { text: "Event Planner", link: "event-planner" },
    { text: "Draggable Slider", link: "draggable-slider" },
    { text: "Todo List", link: "todo-list" },
    { text: "Currency Converter", link: "currency-converter" },
    { text: "Image Editor", link: "image-editor" },
    { text: "Weather App", link: "weather-app" },
    { text: "Quiz App", link: "quiz-app-with-timer" },
  ];

  return (
    <div className="flex  items-center between border-b-2 border-slate-700 px-[1rem] py-3">
      <div className="w-[20%]">
        <p className="text-3xl font-bold">WoWProgrammers</p>
      </div>
      <div className="text-lg font-semibold flex-1 w-[80%] flex justify-around">
        {navigators.map((item, i) => (
          <p
            className={`border-2 border-blue-600 px-3 py -1 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white
            ${
              location.pathname === `/${item.link}`
                ? "bg-blue-500 text-white"
                : ""
            }
            `}
            key={i}
            onClick={() => {
              navigate(`/${item.link}`);
            }}
          >
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
