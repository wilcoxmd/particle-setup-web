import React from "react";
import usbPower from "../../images/usbpower.jpg";
import wifiLogo from "../../images/wifilogo.jpg";
import photon from "../../images/photon.jpg";
import network from "../../images/network.jpg";
import "./NeedItem.css";

class NeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  chooseImage() {
    const imageArray = [photon, usbPower, wifiLogo, network];
    return imageArray[this.props.position];
  }

  render() {
    return (
      <div>
        <div className="position-value">{this.props.position + 1}</div>
        <img
          className="need-image"
          src={this.chooseImage()} //TODO figure out better image passing... don't want to define images from in this component
        />
        <h5>{this.props.title}</h5>
      </div>
    );
  }
}

export default NeedItem;
