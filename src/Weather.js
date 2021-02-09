import React from "react";
import "./Weather.css";
export default function Weather () {
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
            <h1>Chelmsford </h1>
             <ul> 
            <li> Tuesday 9th Feb | 13:14</li>
        </ul>
        </div>
        <div className="col-6">   
        <div className="clearfix"> 
        <img src="https://ssl.gstatic.com/onebox/weather/64/snow.png" alt="Snow" className="float-left" />
        <div className="float-left">
        <span className="temperature">6</span> 
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
                         <li> Precipitation: 91%</li>
                   <li> Humidity: 83%</li>
                  <li>  Wind: 11 mph</li>
                  </ul> 
                  </div>
                  </div>
                  </div>
                  </div>



        </div>
        
        
    )
}