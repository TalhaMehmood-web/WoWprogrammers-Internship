import React, { useEffect, useState } from "react";
import alarmTone from "./alarm_tone/alarm_clock.mp3";
const AlarmClock = () => {
  const [time, setTime] = useState("");
  const [hours, setHours] = useState([]);
  const [minutes, setMintues] = useState([]);
  const [selectHour, setSelectHour] = useState("");
  const [selectMinute, setSelectMinute] = useState("");
  const [domain, setDomain] = useState("");
  const [isRingTone, setIsRingTone] = useState(false);
  const clock = () => {
    var currentDate = new Date();

    // Get hours, minutes, and seconds
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    // Determine AM/PM
    var ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour clock format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    // Add leading zeros to minutes and seconds if needed
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Format the result
    var formattedTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
    setTime(formattedTime);
    // Output the result
  };
  setInterval(clock, 1000);
  useEffect(() => {
    const generateHours = () => {
      const hoursArray = [];
      for (let i = 1; i <= 12; i++) {
        hoursArray.push(i);
      }
      setHours(hoursArray);
    };
    generateHours();
  }, []);

  useEffect(() => {
    const generateMintues = () => {
      const minutesArray = [];
      for (let i = 1; i <= 59; i++) {
        minutesArray.push(i);
      }
      setMintues(minutesArray);
    };
    generateMintues();
  }, []);

  const alarmDate = `${selectHour}:${selectMinute}:00 ${domain}`;
  // const alarmDate = "12:22:40 AM";

  const setAlarm = () => {
    // setIsRingTone(false);

    if (time === alarmDate) {
      const ringtone = new Audio(alarmTone);
      ringtone.play();
      console.log(true);
    }
    console.log(time);
    console.log(alarmDate);
  };

  return (
    <div className="bg-slate-700 drop-shadow-xl w-[30%] p-8 rounded-md flex flex-col items-center">
      <div>
        <p className="text-4xl my-3 font-bold">Alarm Clock</p>
      </div>
      <div>
        <img
          className="w-[180px] h-[120px] rounded-md object-cover"
          src="http://127.0.0.1:5500/Alarm%20Clock/images/clock.jpg "
          alt="image"
        />
      </div>
      <div>
        <p className=" my-3 font-bold text-4xl">{time}</p>
      </div>
      <div className="flex-grow flex justify-around  w-full my-4  flex-col ">
        <div className="mb-2">
          <label className=" text-base font-semibold ">Select Time</label>
        </div>
        <div className="w-full flex justify-between">
          <select
            value={selectHour}
            onChange={(e) => setSelectHour(e.target.value)}
            className="bg-slate-600 outline-none border-slate-400 px-3 py-1 text-white rounded-md cursor-pointer"
          >
            {hours.map((hour, i) => (
              <option key={i}>{hour}</option>
            ))}
          </select>
          <select
            value={selectMinute}
            onChange={(e) => setSelectMinute(e.target.value)}
            className="bg-slate-600 outline-none border-slate-400 px-3 py-1 text-white rounded-md cursor-pointer"
          >
            {minutes.map((minute, i) => (
              <option key={i}>{minute}</option>
            ))}
          </select>
          <select
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="bg-slate-600 outline-none border-slate-400 px-3 py-1 text-white rounded-md cursor-pointer"
          >
            <option>AM</option>
            <option>PM</option>
          </select>
        </div>
      </div>
      <div>
        {
          // !isRingTone &&
          <button
            className="text-lg font-medium bg-blue-500 rounded-md border border-blue-600 hover:bg-blue-600 px-2 py-1"
            onClick={setAlarm}
          >
            Set Your Alarm
          </button>
        }
        {/* {isRingTone && (
          <button
            className="text-lg font-medium bg-blue-500 rounded-md border border-blue-600 hover:bg-blue-600 px-2 py-1"
            onClick={stopAlarm}
          >
            Stop Alarm
          </button>
        )} */}
      </div>
    </div>
  );
};

export default AlarmClock;
