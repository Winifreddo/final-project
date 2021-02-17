import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";
import WeatherData from "./WeatherData";
import "./Weather.css";
export default function Weather (props) {

    let [weather, setWeather]=useState ({});
    let [loaded, setLoaded]=useState (false);
    let [city, setCity]=useState(props.defaultCity);
function handleWeather (response) {
    
    setWeather( {
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        image: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        date: new Date(response.data.dt*1000),
        city: response.data.name,
    });
setLoaded (true);
}

function search () {
    let apiKey="91a2969663631e6bc0bf8b6ad1300fee";
let unit="metric";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

axios.get(apiUrl).then(handleWeather);
}

function handleSubmit (event) {
    event.preventDefault();
    search(city);

}

function handleChange (event) {
setCity(event.target.value);
}

if (loaded) {
    return (
        <div className="Weather"> 
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
        <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={handleChange} />
        </div>
        <div className="col-3">
        <input type="submit" value="search" className="btn btn-dark w-100" />
      </div>
       </div> 
       </form>
        <WeatherData data={weather} />
        </div>
    );

} else {
    search();
return "App currently loading...";
}
    
}