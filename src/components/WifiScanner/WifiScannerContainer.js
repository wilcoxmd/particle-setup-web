import React from "react";
import ScanWifiButton from "./ScanWifiButton";
import WifiScanList from "./WifiScanList";
import ParticleDeviceService from "../../services/ParticleDeviceService";

class WifiScannerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scanned: false,
      networks: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    try {
      const networks = await ParticleDeviceService.scanAP();
      this.setState({ scanned: true, networks: networks });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <ScanWifiButton
          onClick={this.handleClick}
          innerText={!this.state.scanned ? "Scan Networks" : "Re-Scan Networks"}
        />
        {this.state.scanned === true ? (<WifiScanList networks={this.state.networks} />) : (<br />)}
      </div>
    );
  }
}

export default WifiScannerContainer;
