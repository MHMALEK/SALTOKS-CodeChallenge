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

const createStyleLoader = (externalOrInternal) => [
  {
    loader: properStyleLoader
  },
  {
    loader: "css-loader",
    options: {
      modules:
        externalOrInternal === "externalCssLibsWithOutCssModules" ? false : true,
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
        // a rule for all css libs that should not pass css modules compiler
        test: fileTypes.styles,
        include: [pathTo.nodeModulesDir, pathTo.srcDir],
        oneOf: [
          {
            resourceQuery: /^\?interalCssWithCssModules$/,
            use: createStyleLoader("interalCssWithCssModules")
          },
          {
            use: createStyleLoader("externalCssLibsWithOutCssModules")
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
