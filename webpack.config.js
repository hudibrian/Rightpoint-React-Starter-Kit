/* eslint-disable */

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || "7000";

module.exports = {
  entry: [
    "react-hot-loader/patch",
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    `webpack/hot/only-dev-server`,
    `./src/index.js`
  ],
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ["babel"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.join(__dirname, "images"),
        loader: "url-loader?limit=30000&name=images/[name].[ext]"
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  devServer: {
    contentBase: "./build",
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CopyWebpackPlugin([{ from: "imgs", to: "imgs" }])
  ]
};
