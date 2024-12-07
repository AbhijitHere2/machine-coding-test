import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather,setWeather] = useState(null)

  const fetchWeather = async()=>{
   const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`
   );
   const data =  await response.json()
   console.log(data);
   
   setWeather(data)
  }
  return (
    <div className="bg-white w-11/12 place-self-center max-w-md flex flex-col p-7 min-h-[550px] rounded-xl bg-gradient-to-tl to-blue-600 from-violet-500  gap-10">
      {/* ----------input box--------- */}
      <div className="bg-blue-200 h-14 rounded-full  flex ">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          className=" bg-transparent flex-1 items-center  pl-5 outline-none border-0 placeholder:text-slate-500"
        />
        <button onClick={fetchWeather} className="p-5 bg-blue-600 rounded-full">
          {" "}
          <IoIosSearch className="max-h-fit" />
        </button>
      </div>
      {/* -----------weather display---------- */}
      <div className=" flex-col flex items-center space-y-10 ">
      {/* {weather && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )} */}
      </div>
    </div>
  );
};

export default Weather;
