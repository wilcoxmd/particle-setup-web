import React from "react";
import { withRouter } from "react-router-dom";
import "./NextButton.css";

class NextButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <button
        className="next-button"
        onClick={() => this.handleClick(this.props.nextPath)}
      >
        <h5>Next</h5>
      </button>
    );
  }
}

export default withRouter(NextButton);
