import React from "react";
import Blog from "./Blog";
import Resume from "./Resume";
import Workitems from "./Workitems";
import "./works.css";


function Works() {
  return (
    <div className="w" id="Works">
      <div className="w-text">
        <h1 className="w-title"> My Works and Projects </h1>
        <p className="w-desc">
          Example of my Recent Projects.
        </p>
      </div>
      <div className="w-pl">
        <Workitems/>
        <Resume />
        <Blog />
      </div>
    </div>
  );
}
export default Works;
