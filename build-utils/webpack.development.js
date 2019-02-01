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
          test: /\.css$/ || /\.module.css$/,
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              }
            }
          ]
        }
      ]
    },
    devtool: "inline-source-map",
    devServer: {
      port: 3000,
      index: serveFile,
      open: true,
      overlay: true
    }
  };
};
