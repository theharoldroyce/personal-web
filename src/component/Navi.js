import React from "react";
import "./nav.css";
import {Link} from 'react-scroll'


function Navi() {
  return (
    <div>
      <div className="n-list">
        <ul style={{listStyleType: 'none'}}>
          <li>
          <Link to='Intro'>Home</Link>
          </li>
          <li>
          <Link to='About'>About me</Link>
          </li>
          <li>
          <Link to='Works'>My Works</Link>
          </li>
          <li>
            <Link to='Contact'>Contact me</Link>
          </li>  


      
        </ul>
      </div>
    </div>
  );
}
export default Navi;
