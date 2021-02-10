import React, {useEffect, useState} from "react";
import "./css/style.css";

  const Tempapp = () => {

    const [city,setcity] = useState(null);
    const [search,setSearch] = useState("karnataka");

    useEffect( () => {
      const fecthApi = async () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3d78c5aafdd17e27afc1e8e6fc05096b`
        const response = await fetch(url);
        const resjson = await response.json();

        setcity(resjson.main);
      };

      fecthApi();
    },[search] )

    return(
      <>
          <div className="box">
            <div className="inputData">
              <input type="search"
              value={search}
              className="inputFeild"
              onChange={ (event) => { setSearch(event.target.value)}}/>
            </div>
{!city ? (
    <p className="errorMsg">no Data Found</p>
) :(
  <div>
    <div className="info">
    <h2 className="location">
    <i className="fa fa-view"></i>{search}
    </h2>
    <h1 className="temp">
    {city.temp}°Cel
    </h1>
    <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
    </div>
    <div className="wave -one"></div>
    <div className="wave -two"></div>
    <div className="wave -three"></div>
    </div>
)}
      </div>    
      </>
    )

  }
export default Tempapp;