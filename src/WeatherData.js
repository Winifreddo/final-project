import React from "react";
import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";
import Weather from "./Weather";
import WeatherConversion from "./WeatherConversion";
import "./weatherData.css";
import WeatherIcon from "./WeatherIcon";
export default function WeatherData(props) {
  return (
      <div className="Weatherinfo">
    <div className="information">
    <div className="row mt-3">
        <div className="col-6">    
        <h1>{props.data.city}</h1>
         <ul> 
        <li> <FormatDate date={props.data.date}  /></li>
        <li><FormatTime date={props.data.date} /></li>
    </ul>
    </div>
    <div className="col-6">   
    <div className="clearfix">  
     <div className="float-left">
      <span classname="temperature">
      <WeatherConversion celsius= {props.data.temperature} />
</span>
    </div>
    <div classname="float-left">
    <WeatherIcon code={props.data.icon} />
    </div>

  
    </div>
     </div>
    </div>
</div>
<div className="data">
<div classname="row">
<div className="col-6">   <div className="Properties">
                      <ul> 
                     <li className="text-capitalize"> Description: {props.data.description}</li>
               <li> Humidity: {props.data.humidity}%</li>
              <li>  Wind: {Math.round(props.data.wind)} km/h</li>
              </ul> 
              </div>
              </div>
              </div>
              </div>
              </div>
  )
}