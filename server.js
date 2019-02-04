const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/download", (req, res, next) => {
  fs.readFile("./build/local-setup-file.html", "utf8", function(err, data) {
    let response = {};
    response.fileContents = data;
    res.send(response);
  });
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
