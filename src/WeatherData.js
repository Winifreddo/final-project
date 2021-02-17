import React from "react";
import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";
import Weather from "./Weather";
import "./weatherData.css";
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
    <img src={props.data.image} alt={props.data.description} className="float-left" />
    <div className="float-left">
    <span className="temperature">{Math.round(props.data.temperature)}</span> 
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