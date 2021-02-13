import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";

import "./Weather.css";
export default function Weather (props) {

    let [weather, setWeather]=useState ({});
    let [loaded, setLoaded]=useState (false);
function handleWeather (response) {
    
    setWeather( {
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        image: "https://ssl.gstatic.com/onebox/weather/64/snow.png",
        date: new Date(response.data.dt*1000),
    });
setLoaded (true);
}
if (loaded) {
    return (
        <div className="Weather"> 
        <form>
            <div className="row">
                <div className="col-9">
        <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" />
        </div>
        <div className="col-3">
        <input type="submit" value="search" className="btn btn-dark w-100" />
      </div>
       </div> 
       </form>
        
        <div className="information">
        <div className="row mt-3">
            <div className="col-6">    
            <h1>{props.defaultCity}</h1>
             <ul> 
            <li> <FormatDate date={weather.date}  /></li>
            <li><FormatTime date={weather.date} /></li>
        </ul>
        </div>
        <div className="col-6">   
        <div className="clearfix"> 
        <img src={weather.image} alt={weather.description} className="float-left" />
        <div className="float-left">
        <span className="temperature">{Math.round(weather.temperature)}</span> 
        <span classname="unit">°C | °F </span>
        </div>
        </div>
         </div>
        </div>
</div>
<div className="data">
    <div classname="row">
<div className="col-6">   <div className="Properties">
                          <ul> 
                         <li className="text-capitalize"> Description: {weather.description}</li>
                   <li> Humidity: {weather.humidity}%</li>
                  <li>  Wind: {Math.round(weather.wind)} km/h</li>
                  </ul> 
                  </div>
                  </div>
                  </div>
                  </div>



        </div>
        
        
    );

} else {



let apiKey="91a2969663631e6bc0bf8b6ad1300fee";
let unit="metric";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;

axios.get(apiUrl).then(handleWeather);

return "App currently loading...";
}
    
}