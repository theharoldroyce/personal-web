import React from "react";
import "./nav.css";


function Navi() {
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <a href="#Home">Home</a>
        <a href="#About">About me</a>
        <a href="./Workitems">My works</a>
        <a href="#Contact">Contact me</a>
        <a href="javascript:void(0);" className="icon" onclick="myFunction()">
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}
export default Navi;
