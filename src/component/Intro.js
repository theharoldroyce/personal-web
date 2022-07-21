import React from "react";
import "./intro.css";
import Me from "../img/introo2.png";
function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi I Am</h2>
          <h1 className="i-name">Harold Royce</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Web Design</div>
              <div className="i-title-item">Coffee Enthusiast</div>
              <div className="i-title-item">Photographer</div>
            </div>
          </div>
          <p className="i-dis">
          I am here to build and Design exceptional Web Software and Application.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img"/>
      </div>
    </div>
  );
}
export default Intro;
