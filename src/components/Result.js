import React from "react";
import "./../sass/main.scss";

function Result(props) {
  return <div className="result-container" onClick={props.handleClick}></div>;
}

export default Result;
