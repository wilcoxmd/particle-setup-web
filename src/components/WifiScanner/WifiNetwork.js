import React from "react";

class WifiNetwork extends React.Component {
  connectToNetwork(network) {
    const passwordInput = document.getElementById("networkPassword").value;
    console.log(passwordInput);
  }

  render() {
    return (
      <div>
        <h4>{this.props.ssid}</h4>
        <p>Security Type: {this.props.security}</p>
        <p>Signal Strength: {this.props.rssi}</p>
        <p>Enter Password:</p>
        <input type="text" id="networkPassword" />
        <button onClick={this.connectToNetwork}>Connect!</button>
      </div>
    );
  }
}

export default WifiNetwork;
