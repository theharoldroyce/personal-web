import React from 'react'
import Workitems from './Workitems';
import "./works.css";

 function Works() {
  return (
    <div className="w">
        <div className="w-text">
            <h1 className="w-title"> My Works and Projects </h1>
            <p className="w-desc">
                lorem am  here to build and Design exceptional Web Software and Application
            </p>
        </div>
        <div className="w-pl">
                <Workitems />
                <Workitems />
                <Workitems />
                <Workitems />
                <Workitems />
                <Workitems />
            </div>
      
    </div>
  )
}
export default Works;