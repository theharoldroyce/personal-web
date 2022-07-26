import React from "react";
import "./nav.css";
import {Link} from 'react-scroll'


function Navi() {
  return (
    <div>
      <div className="n-list">
        <ul style={{listStyleType: 'none'}}>
          <Link spy={true} to='Navi' smooth={true} activeClass="activeClass">
          <li>Home</li>
          </Link>
          <Link spy={true} to='About' smooth={true} >
          <li>About me</li>
          </Link>
          <Link spy={true} to='Works' smooth={true}>
 
          <li>My works</li>
          </Link>
          <Link spy={true} to='Contact' smooth={true} >

          <li>Contact me</li>  
          </Link>

      
        </ul>
      </div>
    </div>
  );
}
export default Navi;
