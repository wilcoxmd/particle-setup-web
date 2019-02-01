const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const modeConfig = (env, platform) =>
  require(`./build-utils/webpack.${env}`)(env, platform);

module.exports = (
  env = {
    mode: "production",
    platform: "web",
    API_URL: "http://localhost:8080"
  }
) => {
  return webpackMerge(
    {
      mode: env.mode,
      entry: {
        web: ["babel-polyfill", "./src/web-app/index.js"],
        local: ["babel-polyfill", "./src/local-app/index.js"]
      },
      output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js"
      },
      plugins: [
        new webpack.DefinePlugin({
          "process.env.API_URL": JSON.stringify(env.API_URL)
        }),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          filename: "local-setup-file.html",
          template: "./public/local-setup-file.html",
          chunks: ["local"],
          inlineSource: ".(js|css)$"
        }),
        new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
        new HtmlWebpackPlugin({
          filename: "index.html",
          template: "./public/index.html",
          chunks: ["web"],
          minify: true
        }),
        new CopyWebpackPlugin([
          // relative path is from src
          { from: "./public/favicon.ico" }
        ])
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
            test: /\.(png|jpg|jpeg|gif)$/i,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 8192
                }
              }
            ]
          }
        ]
      }
    },
    modeConfig(env.mode, env.platform)
  );
};
