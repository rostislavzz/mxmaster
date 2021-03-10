const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "script.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.pug",
      filename: "index.html",
      minify: false,
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true,
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "resolve-url-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpg)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },
};

module.exports = config;
