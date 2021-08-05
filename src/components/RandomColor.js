import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function RandomColor(props) {
  const [color, setColor] = useState("grey");
  useEffect(() => {
    const interval = setInterval(() => {
      setColor(randomcolor());
    }, 700);
    return () => clearInterval(interval);
  }, []);
  return (
    <div onClick={props.handleClick} id="container" className="color-container">
      <div id="#FF3F00" className="color">
        <div className="color-red circle"></div>
      </div>
      <div id="#FB9300" className="color">
        <div className="color-orange circle"></div>
      </div>
      <div id="#FFE268" className="color">
        <div className="color-yellow circle"></div>
      </div>
      <div id="#81B214" className="color">
        <div className="color-green circle"></div>
      </div>
      <div id="#00C1D4" className="color">
        <div className="color-blue circle"></div>
      </div>
      <div id="#0F044C" className="color">
        <div className="color-navy circle"></div>
      </div>
      <div id="#52006A" className="color">
        <div className="color-purple circle"></div>
      </div>
      <div id="white" className="color">
        <div className="color-white circle"></div>
      </div>
      <div id="black" className="color">
        <div className="color-black circle"></div>
      </div>
      <div id="random" className="color">
        <div
          className="color-random circle"
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
}

export default RandomColor;
