import React from "react";

function ResultItems(props) {
  return (
    <div
      className="result"
      id={props.style.id}
      style={{
        fontSize: props.style.rangeValue,
        fontFamily: props.style.fontType,
        color: props.style.textColor,
        textShadow: `-2px -2px 0 ${props.style.outlineColor}, 2px -2px 0 ${props.style.outlineColor}, -2px 2px 0 ${props.style.outlineColor}, 2px 2px 0 ${props.style.outlineColor}`,
        backgroundColor: props.style.backgroundColor,
      }}
    >
      {props.style.textInput}
      <div className="delete">X</div>
    </div>
  );
}
export default ResultItems;
