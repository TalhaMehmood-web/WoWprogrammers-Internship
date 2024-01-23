import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoList from "./projects/TodoList/TodoList";
import AlarmClock from "./projects/AlarmClock/AlarmClock";
import EventPlanner from "./projects/EventPlanner/EventPlanner";
import DraggableSlider from "./projects/DraggableSlider/DraggableSlider";
import CurrencyConverter from "./projects/CurrencyConverter/CurrencyConverter";
import ImageEditor from "./projects/ImageEditor/ImageEditor";
import WeatherApp from "./projects/WeatherApp/WeatherApp";
import QuizApp from "./projects/QuizApp/QuizApp";
function App() {
  return (
    <div className="bg-slate-800 flex flex-col text-white  w-full min-h-screen">
      <Navbar />
      <div className=" flex-grow  flex items-start  mt-[5rem] justify-center">
        <Routes>
          <Route path="/" element={<AlarmClock />} />
          <Route path="/event-planner" element={<EventPlanner />} />
          <Route path="/draggable-slider" element={<DraggableSlider />} />
          <Route path="/currency-converter" element={<CurrencyConverter />} />
          <Route path="/image-editor" element={<ImageEditor />} />
          <Route path="/weather-app" element={<WeatherApp />} />
          <Route path="/quiz-app-with-timer" element={<QuizApp />} />
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
