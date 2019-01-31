module.exports = (mode, platform) => {
  let serveFile;
  if (platform === "web") {
    serveFile = "index.html";
  } else if (platform === "local") {
    serveFile = "local-setup-file.html";
  }

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    devtool: "inline-source-map",
    devServer: {
      port: 3000,
      index: serveFile
    }
  };
};
