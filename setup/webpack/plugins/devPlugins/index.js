/* dev plugins */

const webpack = require("webpack")

module.exports = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    "process.env": {
      BASE_API_URL: JSON.stringify("https://api.github.com")
    }
  })
]
