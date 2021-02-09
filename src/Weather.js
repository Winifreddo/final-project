import React from "react";
import "./Weather.css";
export default function Weather () {
    return (
        <div className="Weather"> 
        <form>
            <div className="row">
                <div className="col-9">
        <input type="search" placeholder="Enter a city" className="form-control" />
        </div>
        <div className="col-3">
        <input type="submit" value="search" className="btn btn-primary" />
      </div>
       </div> 
       </form>
        
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/snow.png" alt="Snow" /> {" "} 6°C | °F {" "}
                         
                          <span className="Properties">
                          <ul> 
                         <li> Precipitation: 91%</li>
                    
                   <li> Humidity: 83%</li>
                  
                  <li>  Wind: 11 mph</li>
                  
                  </ul> 
      </span>
</div>
<div className="col-6">
             <ul>
            <li> Chelmsford</li>
            <li> Tuesday 13:14</li>
            <li> Snow Showers</li>
        </ul>
        </div>
        </div>
        </div>
    )
}