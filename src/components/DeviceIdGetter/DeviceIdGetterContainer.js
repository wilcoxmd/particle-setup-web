import React from "react";
import DeviceIdGetter from "./DeviceIdGetter";
import { ParticleService } from "../../services/ParticleService";

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
      const deviceid = await ParticleService.fetchDeviceId();
      this.setState({
        id: deviceid
      });
      await ParticleService.disconnectFromDevice();
    } catch (err) {
      this.setState({
        id:
          "Hmm...Couldn't find your device. Did you connect to it's Wi-Fi network?"
      });
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
