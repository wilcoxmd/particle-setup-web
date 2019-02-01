import React from "react";
import saveAs from "file-saver";

export default class DownloadButton extends React.Component {
  async handleClick() {
    console.log("click!");
    try {
      const response = await fetch(`${process.env.API_URL}/download`);
      const data = await response.json();

      let fileContents = data.fileContents;
      const newString = fileContents.replace(/TOKENPLACEHOLDER/, "Donovan");
      const dataString = `original data: ${data.fileContents}`;

      //   console.log(dataString);
      //   console.log(newString);

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
