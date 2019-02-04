import React from "react";
import "./App.css";
import DownloadButton from "./components/DownloadButton";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello Web World</p>
        <DownloadButton />
      </div>
    );
  }
}
