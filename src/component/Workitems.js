import React from "react";
import "./workitems.css";
import Port from "../img/hrweb.png";

const  Workitems = () => {
    return (
      <div className="wi">
      <div className="wi-b">
        <div className="wi-c"></div>
        <div className="wi-c"></div>
        <div className="wi-c"></div>   
      </div>
      <a href="https://haroldroyce.ml" target="_blank" rel="noreferrer"> 
      <img src={Port} alt="" className="w-img" />  
      </a>
    </div>

    );
};
export default Workitems;


