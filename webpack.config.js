const path = require("path");

const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "dist"),

    filename: "bundle.js",
  },

  module: {
    rules: [

      { test: /\.vue$/, use: ["vue-loader"] },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};
