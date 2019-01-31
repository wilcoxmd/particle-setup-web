const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");

const modeConfig = (env, platform) =>
  require(`./build-utils/webpack.${env}`)(env, platform);

module.exports = (env = { mode: "production", platform: "web" }) => {
  return webpackMerge(
    {
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
      }
    },
    modeConfig(env.mode, env.platform)
  );
};
