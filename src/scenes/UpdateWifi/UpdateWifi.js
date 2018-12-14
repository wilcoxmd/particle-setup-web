import React from "react";
import WifiScannerContainer from "../../components/WifiScanner";

class UpdateWifi extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the page to configure Wi-Fi</h1>
        <WifiScannerContainer />
      </div>
    );
  }
}

export default UpdateWifi;
