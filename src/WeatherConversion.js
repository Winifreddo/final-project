import React, { useState } from "react";


export default function WeatherConversion (props) {
    let [convert, setConvert]=useState("celsius");
function handleClick (event) {
    event.preventDefault();
    setConvert("fahrenheit");

}

function convertToCelsius (event) {
    event.preventDefault();
    setConvert("celsius");
}
    if (convert === "celsius") {
    return (
        <div className="Conversion">

<span className="temperature">{Math.round(props.celsius)}</span> 
    <span classname="unit">
        °C |<a href="/" onClick={handleClick}> °F </a>
        </span>

    </div>
    );
} else {
    let fahrenheit = (props.celsius * 9)/5 + 32;
    return (
        <div className="Conversion">

<span className="temperature">{Math.round(fahrenheit)}</span> 
    <span classname="unit">
      <a href="/" onClick={convertToCelsius}> °C </a>| °F 
        </span>

    </div>
    );
}
}
