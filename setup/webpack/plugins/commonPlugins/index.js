// webpack plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

// image size utils
const ImageminPlugin = require("imagemin-webpack")
const imageminJpegtran = require("imagemin-jpegtran")
const imageminOptipng = require("imagemin-optipng")
const imageminSvgo = require("imagemin-svgo")

// utils
const devMode = process.env.NODE_ENV === "production" ? false : true
const pathTo = require("../../util/pathTo")

module.exports = [
  new MiniCssExtractPlugin({
    filename: devMode ? "[name].css" : "[name].[hash].css",
    chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
  }),
  new HtmlWebpackPlugin({
    title: "SALTO KS",
    filename: "index.html",
    languageCode: "en-EN",
    template: pathTo.htmlTemplateSrc,
    inject: true,
    favicon: pathTo.favIconSrc
  }),
  new ImageminPlugin({
    bail: false, // Ignore errors on corrupted images
    cache: false, // when you enable cache and change options for imagemin plugin,
    // you should remove cache manually
    include: pathTo.srcDir,
    exclude: pathTo.nodeModulesDir
  })
]
