const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = ({ mode } = { mode: "production" }) => {
  return {
    mode,
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
        filename: "local.html",
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
    }
  };
};
