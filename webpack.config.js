const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

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
          chunks: ["local"],
          inlineSource: ".(js|css)$"
        }),
        new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
        new HtmlWebpackPlugin({
          filename: "index.html",
          template: "./public/index.html",
          chunks: ["web"],
          minify: true
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
