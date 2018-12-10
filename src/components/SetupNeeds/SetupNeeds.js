import React, { Component } from "react";
import NeedItem from "../NeedItem";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import NextButton from "../NextButton";

class SetupNeeds extends Component {
  render() {
    return (
      <Grid>
        <Row className="needs-header">
          <Col xs={12}>
            <div className="intro-header">
              <h1>Let's get started</h1>
              <h4>
                Here are some things you'll need. <br />
                Click next when you're ready.
              </h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} mdOffset={2}>
            <NeedItem position={0} title="Particle Device" />
          </Col>
          <Col xs={12} md={4}>
            <NeedItem position={1} title="USB Power" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} mdOffset={2}>
            <NeedItem position={2} title="Wi-Fi Network" />
          </Col>
          <Col xs={12} md={4}>
            <NeedItem position={3} title="Network Credentials" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <NextButton />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SetupNeeds;
