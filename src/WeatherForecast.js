import React, { useState } from "react"; 
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast (props) {
let [loaded, setLoaded] = useState (false);
let [forecast, setForecast] = useState (null);
function handleForecast (response) {
setForecast(response.data);
 setLoaded(true);
}
if (loaded) {
    return (
        <div className= "temperatureForecast">
        { Math.round(forecast.list[0].main.temp)}
         </div>

    )
   
} else {

    let apiKey= "91a2969663631e6bc0bf8b6ad1300fee";
    let apiUrl= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleForecast);
    return null;
}
}