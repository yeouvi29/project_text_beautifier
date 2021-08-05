import React, { PureComponent } from "react";

class RandomOutput extends PureComponent {
  render() {
    return (
      <button className="btn btn-random" onClick={this.props.handleClick}>
        Randomize!
      </button>
    );
  }
}

export default RandomOutput;
