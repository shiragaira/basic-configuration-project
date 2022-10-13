const { merge } = require("webpack-merge")
const commonConfig = require("./common.config")
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const path = require("path")

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../../dist"),
    filename: "bundle.js",
    clean: true,
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  plugins: [new ReactRefreshPlugin()],
  performance: {
    hints: false,
  },
})
