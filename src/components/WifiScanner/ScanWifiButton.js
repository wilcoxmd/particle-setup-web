import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import WifiNetwork from "./WifiNetwork";

class ScanWifiButton extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={6} mdOffset={3}>
            <button onClick={this.props.onClick}>{this.props.innerText}</button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ScanWifiButton;
