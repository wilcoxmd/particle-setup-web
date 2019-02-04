import React from "react";
import "./App.css";
import logo from "./logo.png";
import Test from "./components/Test/Test";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello Local World</p>
        <img src={logo} />
        <Test />
      </div>
    );
  }
}
