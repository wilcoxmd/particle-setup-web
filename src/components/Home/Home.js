import React, { Component } from "react";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import { Link } from "react-router-dom";
import SetupOption from "../SetupOption";

class Home extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className="intro-header">
                <h1>Welcome to Your Setup App!</h1>
                <h4>Select an option below to configure a device</h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} mdOffset={2}>
              <Link to="/setup-needs/">
                <SetupOption
                  location="primary"
                  title="Set up New Device"
                  desc="Fully claim a new device to your account and connect it to your Wi-Fi network"
                  imageUrl="https://goo.gl/d8sqQk"
                />
              </Link>
            </Col>
            <Col xs={12} md={4}>
              <Link to="/getid-needs/">
                <SetupOption
                  location="secondary"
                  title="Get Device ID"
                  desc="Retrieve the ID number from one of your devices"
                  imageUrl="https://goo.gl/XvaqYr"
                />
              </Link>
              <Link to="/configwifi-needs/">
                <SetupOption
                  location="secondary"
                  title="Update Device Wi-Fi"
                  desc="Add a new Wi-Fi network to an existing device"
                  imageUrl="https://goo.gl/dpGcpX"
                />
              </Link>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
