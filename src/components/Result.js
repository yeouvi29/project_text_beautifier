import React, { PureComponent } from "react";
import ResultItems from "./ResultItems";
import { v4 as uuidv4 } from "uuid";
// import "./../sass/main.scss";

class Result extends PureComponent {
  render() {
    const { result } = this.props;
    return (
      <div className="result-container" onClick={this.props.handleClick}>
        {result.map((item) => (
          <ResultItems style={item} key={uuidv4()} />
        ))}
      </div>
    );
  }
}

export default Result;
