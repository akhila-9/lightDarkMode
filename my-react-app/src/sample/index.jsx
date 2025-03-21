import React, { useState } from "react";
import "./index.css";

const LightDarkMode = () => {
  const [change, setchange] = useState(false);
  const clickingFunction = () => {
    setchange(!change);
  };
  return (
    <div className="entirecontainer">
      <div className={`${change ? "lightCon" : "darkCon"} container`}>
        <div className={`${change ? "lightCon" : "darkCon"} divcontainer`}>
          <div className="cardContainer">
            <div className={`${change ? "lightHeading" : "darkHeading"}`}>
              click to change mode
            </div>
            <div onClick={clickingFunction} className="btnStyle">
              <button>{change ? "light mode" : "Dark mode"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightDarkMode;
