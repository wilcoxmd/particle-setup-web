import React from "react";
import { DeviceIdGetterContainer } from "../../components/DeviceIdGetter/DeviceIdGetterContainer";

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
