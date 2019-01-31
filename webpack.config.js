const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = (env = { mode: "production", platform: "web" }) => {
  let serveFile;
  if (env.platform === "web") {
    serveFile = "index.html";
  } else if (env.platform === "local") {
    serveFile = "local.html";
  }

  return {
    mode: env.mode,
    entry: {
      web: "./src/web-app/index.js",
      local: "./src/local-app/index.js"
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].js"
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        filename: "local-setup-file.html",
        template: "./public/local-setup-file.html",
        chunks: ["local"]
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./public/index.html",
        chunks: ["web"]
      })
    ],
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    devServer: {
      port: 3000,
      index: serveFile
    }
  };
};
