import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import "./DeviceIdGetter.css";

class DeviceIdGetter extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <button onClick={this.props.onClick} className="get-id-btn">
              <h4>Get ID!</h4>
            </button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} mdOffset={4}>
            <h4>{this.props.header}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} mdOffset={4}>
            <code>{this.props.deviceid}</code>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default DeviceIdGetter;
