import React from "react";
import "./SetupOption.css";

class SetupOption extends React.Component {
  constructor(props) {
    super(props);
  }

  chooseBoxClassName() {
    if (this.props.location === "primary") {
      return "setup-option-box primary-box";
    } else if (this.props.location === "secondary") {
      return "setup-option-box secondary-box";
    }
  }

  render() {
    console.log(`image url: ${this.props.imagePath}`);
    return (
      <div className={this.chooseBoxClassName()}>
        <img
          className="setup-option-img"
          src={this.props.imageUrl}
          alt="icon"
        />
        <h3 className="setup-option-title">{this.props.title}</h3>
        <p className="setup-option-desc">{this.props.desc}</p>
      </div>
    );
  }
}

export default SetupOption;
