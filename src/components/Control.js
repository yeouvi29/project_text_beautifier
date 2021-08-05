import React, { memo } from "react";
import RandomColor from "./RandomColor";
import RandomOutput from "./RandomOutput";
import { v4 as uuidv4 } from "uuid";

function Control(props) {
  return (
    <div className="control-container">
      <h1 className="title">TEXT BEAUTIFIER</h1>

      <form className="form" onSubmit={props.handleSubmit}>
        <div className="font-container">
          <label>Font Type </label>
          <select
            value={props.input.fontType}
            onChange={props.handleChange}
            name="fontType"
          >
            {props.input.fontFamily.map((font) => {
              const makeClass = font.toLowerCase().replace(" ", "");
              return (
                <option
                  className={`font-${makeClass}`}
                  value={font}
                  key={uuidv4()}
                >
                  {font}
                </option>
              );
            })}
          </select>
        </div>

        <div className="slide-container">
          <label>Font Size</label>
          <input
            type="range"
            min="16"
            max="50"
            onChange={props.handleChange}
            name="rangeValue"
            value={props.input.rangeValue}
            className="slider"
          />
        </div>

        <div className="radio-container">
          <p>Color Options</p>
          <label className="radio">
            text color
            <input
              type="radio"
              name="colorProperties"
              value="textColor"
              className="radio-input"
              id="textColor"
              checked={props.input.colorProperties === "textColor"}
              onChange={props.handleChange}
            />
          </label>
          <label className="radio">
            outline color
            <input
              type="radio"
              name="colorProperties"
              value="outlineColor"
              className="radio-input"
              checked={props.input.colorProperties === "outlineColor"}
              onChange={props.handleChange}
            />
          </label>
          <label className="radio">
            background color
            <input
              type="radio"
              name="colorProperties"
              value="backgroundColor"
              className="radio-input"
              checked={props.input.colorProperties === "backgroundColor"}
              onChange={props.handleChange}
            />
          </label>
        </div>
        <RandomColor handleClick={props.handleClick} />

        <input type="submit" className="btn btn-generate" value="Generate!" />
        <h3>Or...</h3>
        <RandomOutput handleClick={props.handleClick} />
      </form>
    </div>
  );
}

export default memo(Control);
