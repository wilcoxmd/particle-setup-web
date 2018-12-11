import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import NavDropdown from "react-bootstrap/lib/NavDropdown";
import MenuItem from "react-bootstrap/lib/MenuItem";
import logo from "../../images/logo-main.png";

class MainNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                style={{ width: "200px" }}
                alt="setup need image"
              />
            </Link>
          </Navbar.Brand>
          {/* <Navbar.Toggle /> uncomment if you want a toggler*/}
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default MainNav;
