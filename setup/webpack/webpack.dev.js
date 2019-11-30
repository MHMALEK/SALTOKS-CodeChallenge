const merge = require("webpack-merge")
const common = require("./webpack.common")
const pathTo = require("./util/pathTo")
const webpackPlugins = require("./plugins")

module.exports = merge(common, {
  mode: "development",
  // devtool: "cheap-module-eval-source-map",
  devServer: {
    compress: true,
    contentBase: pathTo.distDir,
    port: 9001,
    host: "0.0.0.0",
    historyApiFallback: true,
    hot: true,
    open: true
  },
  plugins: webpackPlugins.devPlugins
})
