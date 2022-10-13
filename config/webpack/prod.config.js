const { merge } = require("webpack-merge")
const commonConfig = require("./common.config")
const path = require("path")

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../../dist"),
    filename: "bundle.[contenthash].min.js",
    clean: true,
    publicPath: "/",
  },
  devtool: "source-map",
})
