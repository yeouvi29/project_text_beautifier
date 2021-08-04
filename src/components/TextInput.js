import React, { PureComponent } from "react";
// import "./../sass/main.scss";

class TextInput extends PureComponent {
  render() {
    return (
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={this.props.input}
          name="textInput"
          placeholder="Type here!"
          onChange={this.props.handleChange}
          onClick={this.props.handleClick}
        />
      </div>
    );
  }
}

export default TextInput;
