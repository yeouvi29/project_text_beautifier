import React, { useState, useEffect } from "react";
// import "./../sass/main.scss";

function Preview(props) {
  const [size, setSize] = useState(props.preview.rangeValue);
  const [font, setFont] = useState(props.preview.fontType);
  const [textColor, setTextColor] = useState(props.preview.textColor);
  const [outlineColor, setOutlineColor] = useState(props.preview.outlineColor);
  const [backgroundColor, setBackgroundColor] = useState(
    props.preview.backgroundColor
  );

  useEffect(() => {
    setSize(+props.preview.rangeValue);
  }, [props.preview.rangeValue]);

  useEffect(() => {
    setFont(props.preview.fontType);
  }, [props.preview.fontType]);

  useEffect(() => {
    setTextColor(props.preview.textColor);
  }, [props.preview.textColor]);

  useEffect(() => {
    setOutlineColor(props.preview.outlineColor);
  }, [props.preview.outlineColor]);

  useEffect(() => {
    setBackgroundColor(props.preview.backgroundColor);
  }, [props.preview.backgroundColor]);

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
        {props.preview.textInput}
      </div>
    </div>
  );
}

export default Preview;
