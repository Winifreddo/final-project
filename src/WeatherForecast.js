import React, { useState } from "react"; 
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import WeatherHourly from "./WeatherHourly";
import "./WeatherForecast.css";

export default function WeatherForecast (props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

function handleForecastResponse (response) {
  setForecast(response.data);
  setLoaded(true);  
}
if (loaded) {
    return( 
 <div className="info">
        <div className="WeatherTemperature row">
           
          <WeatherHourly data={forecast.list[0]} />
          <WeatherHourly data={forecast.list[1]} />
          <WeatherHourly data={forecast.list[2]} />
          <WeatherHourly data={forecast.list[3]} />
          <WeatherHourly data={forecast.list[4]} />
          <WeatherHourly data={forecast.list[5]} />
          </div>
           </div>    
    );
} else {
      let apiKey= "91a2969663631e6bc0bf8b6ad1300fee";
    let apiUrl= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleForecastResponse);
    return "Still Loading";
}
  
}

  


