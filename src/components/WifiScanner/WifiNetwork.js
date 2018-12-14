import React from "react";
import ParticleDeviceService from "../../services/ParticleDeviceService";

class WifiNetwork extends React.Component {

  constructor(props) {
    super(props);
    this.connectToNetwork = this.connectToNetwork.bind(this);
  }

  async connectToNetwork(network) {
    const passwordInput = document.getElementById("networkPassword").value;
    console.log(passwordInput);
    try {
      console.log("connecting...");
      const configureResult = await ParticleDeviceService.configureAP(this.props.network, passwordInput);
      const connectResult = await ParticleDeviceService.connectToNetwork();
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <h4>{this.props.network.ssid}</h4>
        <p>Security Type: {this.props.network.sec}</p>
        <p>Signal Strength: {this.props.network.rssi}</p>
        <p>Enter Password:</p>
        <input type="text" id="networkPassword" />
        <button onClick={this.connectToNetwork}>Connect!</button>
      </div>
    );
  }
}

export default WifiNetwork;
