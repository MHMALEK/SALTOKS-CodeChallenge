// webpack utils
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const pathTo = require("./util/pathTo")
const fileTypes = require("./util/fileTypes")
const supportedExtensions = require("./util/supportedExtensions")
const webpackPlugins = require("./plugins")

// util functions
const properStyleLoader =
  process.env.NODE_ENV === "production"
    ? MiniCssExtractPlugin.loader
    : "style-loader"

const fileLoaderOptions = {
  name() {
    // change name of files based on env
    if (process.env.NODE_ENV === "development") {
      return "[path][name].[ext]"
    }
    return "[hash].[ext]"
  }
}

module.exports = {
  entry: pathTo.entryPointSrc,
  output: {
    filename: "[name].bundle.[hash].js",
    path: pathTo.distDir,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: pathTo.nodeModulesDir,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: fileTypes.styles,
        use: [
          {
            loader: properStyleLoader
          },
          {
            loader: "css-loader",
            options: {
              modules: false,
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "resolve-url-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: fileTypes.font,
        exclude: pathTo.nodeModulesDir,
        use: [
          {
            loader: "file-loader",
            options: fileLoaderOptions
          }
        ]
      },
      {
        test: fileTypes.images,
        exclude: pathTo.nodeModulesDir,
        use: [
          {
            loader: "file-loader",
            options: fileLoaderOptions
          }
        ]
      }
    ]
  },
  plugins: webpackPlugins.commonPlugins,
  resolve: {
    modules: ["node_modules", "src"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
      Src: pathTo.srcDir,
      Components: pathTo.componentsDir,
      Store: pathTo.storeDir,
      Services: pathTo.servicesDir,
      Utils: pathTo.utilsDir
    },
    extensions: supportedExtensions
  },
  target: "web"
}
