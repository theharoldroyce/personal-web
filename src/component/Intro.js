import React from "react";
import "./intro.css";
import Me from "../img/introo2.png";
import Ame from "../img/profile.jpg";

function Intro() {
  return (
    <div className="i" id="Intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I'm</h2>
          <h1 className="i-name">Harold Royce</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Web Design</div>
              <div className="i-title-item">Coffee Enthusiast</div>
              <div className="i-title-item">Photographer</div>
            </div>
          </div>
          <p className="i-dis">Building Visions. Creating Reality.</p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-card bg"></div>
        <div className="i-card">
          <img src={Ame} alt="" className="a-img" />
        </div>
      </div>
    </div>
  );
}
export default Intro;
