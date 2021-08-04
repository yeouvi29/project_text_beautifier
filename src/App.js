import React, { Component } from "react";
import randomcolor from "randomcolor";
import Control from "./components/Control";
import Preview from "./components/Preview";
import Result from "./components/Result";
import TextInput from "./components/TextInput";

class App extends Component {
  state = {
    textInput: "",
    fontType: "Arial",
    rangeValue: 16,
    textColor: "black",
    outlineColor: "#ffffff00",
    backgroundColor: "#ffffff",
    colorProperties: "textColor",
    count: 0,
    result: [],
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = (event) => {
    if (event.target.closest(".color-container")) {
      if (!event.target.closest(".color")) return;
      const id = event.target.closest(".color").id;
      const random = randomcolor();
      id === "random"
        ? this.setState({ [this.state.colorProperties]: random })
        : this.setState({ [this.state.colorProperties]: id });
    } else if (event.target.closest(".delete")) {
      if (!event.target.closest(".result")) return;
      const targetId = event.target.closest(".result").id;
      this.setState((prev) => {
        return {
          ...prev,
          result: prev.result.filter((item) => item.id !== +targetId),
        };
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState((prev) => {
      const state = this.state;

      return {
        ...prev,
        count: prev.count + 1,
        result: [
          ...prev.result,
          {
            textInput: state.textInput,
            fontType: state.fontType,
            rangeValue: state.rangeValue,
            textColor: this.state.textColor,
            outlineColor: this.state.outlineColor,
            backgroundColor: this.state.backgroundColor,
            colorProperties: this.state.colorProperties,
            id: this.state.count,
          },
        ],
      };
    });
    document.querySelector(".input").value = "";
  };
  handleClear = () => {
    this.setState((prev) => {
      return {
        ...prev,
        textInput: "",
        fontType: "Arial",
        rangeValue: 16,
        textColor: "black",
        outlineColor: "#ffffff00",
        backgroundColor: "#ffffff",
        colorProperties: "textColor",
      };
    });
  };
  render() {
    return (
      <div className="container border">
        <div className="container-left">
          <TextInput
            input={this.state.textInput}
            handleChange={this.handleChange}
            handleClick={this.handleClear}
          />
          <Preview preview={this.state} />
          <Result
            result={this.state.result}
            handleClick={this.handleClick}
            handleSubmit={this.handleSubmit}
          />
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
