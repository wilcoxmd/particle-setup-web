import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-theme.min.css";
import React, { Component } from "react";
import "./App.css";
import MainNav from "./components/MainNav";
import MainBody from "./components/MainBody";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainNav />
          <MainBody />
        </div>
      </Router>
    );
  }
}

export default App;
