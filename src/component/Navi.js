import React from "react";
import "./nav.css";


function Navi() {
  return (
    <div>
      <div className="n-list">
        <ul style={{listStyleType: 'none'}}>
          <li>Home</li>
          <li>About me</li>
          <li>My works</li>
          <li>Contact me</li>        
        </ul>
      </div>
    </div>
  );
}
export default Navi;
