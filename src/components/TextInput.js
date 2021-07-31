import React from "react";
import "./../sass/main.scss";

function TextInput(props) {
  return (
    <div className="input-container">
      <input
        className="input"
        type="text"
        value={props.input.textInput}
        name="textInput"
        placeholder="Type here!"
        onChange={props.handleChange}
      />
    </div>
  );
}

export default TextInput;
