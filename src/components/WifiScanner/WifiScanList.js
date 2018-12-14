import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import WifiNetwork from "./WifiNetwork";
import "./WifiScanList.css";

//networks format:
// {
//   "scans":[{
//       "ssid":"ssidName","rssi":-73,"sec":4194308,"ch":11,"mdr":144400},
//       {"ssid":"ssidName","rssi":-67,"sec":4194310,"ch":11,"mdr":216700}
//    }]
// }
const inputId = "password-input";

class WifiScanList extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={4} mdOffset={4}>
            <div className="scanResults">
              <ul>
                {this.props.networks.map((network, index) => {
                  return (
                    <li key={index} className="network-result">
                      <WifiNetwork
                        network={network}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default WifiScanList;
