import React, { useState, useEffect } from "react";
import "./../sass/main.scss";

function Preview(props) {
  const [size, setSize] = useState(props.result.rangeValue);
  const [font, setFont] = useState(props.result.fontType);
  const [textColor, setTextColor] = useState(props.result.textColor);
  const [outlineColor, setOutlineColor] = useState(props.result.outlineColor);
  const [backgroundColor, setBackgroundColor] = useState(
    props.result.backgroundColor
  );

  useEffect(() => {
    setSize(+props.result.rangeValue);
  }, [props.result.rangeValue]);

  useEffect(() => {
    setFont(props.result.fontType);
  }, [props.result.fontType]);

  useEffect(() => {
    setTextColor(props.result.textColor);
  }, [props.result.textColor]);

  useEffect(() => {
    setOutlineColor(props.result.outlineColor);
  }, [props.result.outlineColor]);

  useEffect(() => {
    setBackgroundColor(props.result.backgroundColor);
  }, [props.result.backgroundColor]);

  return (
    <div className="preview-container">
      <h2>preview</h2>
      <div
        className="preview"
        style={{
          fontSize: size,
          fontFamily: font,
          color: textColor,
          textShadow: `-2px -2px 0 ${outlineColor}, 2px -2px 0 ${outlineColor}, -2px 2px 0 ${outlineColor}, 2px 2px 0 ${outlineColor}`,
          backgroundColor: backgroundColor,
        }}
      >
        {props.result.textInput}
      </div>
    </div>
  );
}

export default Preview;
