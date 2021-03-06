import React from "react";
import saveAs from "file-saver";

export default class DownloadButton extends React.Component {
  async handleClick() {
    console.log("click!");
    try {
      const response = await fetch(`${process.env.SERVER}/download`);
      const data = await response.json();

      let fileContents = data.fileContents;
      const newString = fileContents.replace(
        /TOKENPLACEHOLDER/,
        "<Your tokens here>"
      );
      const dataString = `original data: ${data.fileContents}`;

      var blob = new Blob([newString], {
        type: "text/plain;charset=utf-8"
      });
      saveAs(blob, "local-setup-file.html");
    } catch (err) {
      throw new Error(err.message);
    }
  }

  render() {
    return <button onClick={this.handleClick}>Download Local File</button>;
  }
}
