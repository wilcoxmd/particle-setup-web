import React from "react";
import DeviceIdGetter from "./DeviceIdGetter";
import "./DeviceIdGetter.css";

export class DeviceIdGetterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      header: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    this.setState({ header: "your device id:" });
    this.setState({ id: "fetching id..." });
    try {
      const response = await fetch("http://192.168.0.1/device-id", {
        method: "GET",
        dataType: "JSON"
      });
      const data = await response.json();
      console.log(`Received Data: ${data}`);
      //response format: {"id":"280020001247353136383631","c":"1"}
      this.setState({ id: data.id });
      await this.disconnectFromDevice();
    } catch (err) {
      this.setState({
        id:
          "Hmm...Couldn't find your device. Did you connect to it's Wi-Fi network?"
      });
      console.log(err);
    }
  }

  async disconnectFromDevice() {
    console.log("disconnecting from device...");
    try {
      const response = await fetch("http://192.168.0.1/connect-ap", {
        method: "POST",
        body: JSON.stringify({ idx: 0 }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
          // "Content-Type": "application/x-www-form-urlencoded",
        }
      });
      const data = await response.json();
      console.log("successfully disconnected");
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {}

  render() {
    return (
      <DeviceIdGetter
        deviceid={this.state.id}
        header={this.state.header}
        onClick={this.handleClick}
      />
    );
  }
}
