import React from "react";
import { DeviceIdGetterContainer } from "../DeviceId/DeviceIdGetterContainer.js";

class GetId extends React.Component {
  render() {
    return (
      <div>
        <h1>Let's get your device id:</h1>
        <DeviceIdGetterContainer />
      </div>
    );
  }
}

export default GetId;
