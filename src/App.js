import React, { Component } from "react";
import randomcolor from "randomcolor";
import Control from "./components/Control";
import Preview from "./components/Preview";
import Result from "./components/Result";
import TextInput from "./components/TextInput";

class App extends Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      fontType: "Arial",
      rangeValue: 16,
      textColor: "black",
      outlineColor: "#ffffff00",
      backgroundColor: "#ffffff",
      colorProperties: "textColor",
      count: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type } = event.target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    if (event.target.closest(".color-container")) {
      if (!event.target.closest(".color")) return;
      const id = event.target.closest(".color").id;
      const random = randomcolor();
      id === "random"
        ? this.setState({ [this.state.colorProperties]: random })
        : this.setState({ [this.state.colorProperties]: id });
    } else if (event.target.closest(".delete")) {
      event.target.closest(".result").remove();
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const deleteDiv = document.createElement("div");
    const newDiv = document.querySelector(".preview").cloneNode(true);

    newDiv.classList.add("result", "clearfix");
    newDiv.classList.remove("preview");
    newDiv.setAttribute("id", this.state.count);
    deleteDiv.classList.add("delete");
    deleteDiv.innerHTML = "X";
    newDiv.innerHTML = this.state.textInput;
    document.querySelector(".result-container").appendChild(newDiv);
    newDiv.appendChild(deleteDiv);
    this.state.count++;
  }

  handleTest(event) {
    console.log("test");
  }

  render() {
    return (
      <div className="container border">
        <div className="container-left">
          <TextInput input={this.state} handleChange={this.handleChange} />
          <Preview result={this.state} />
          <Result result={this.state} handleClick={this.handleClick} />
        </div>
        <div className="container-right">
          <Control
            input={this.state}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default App;
