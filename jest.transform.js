// module.exports = require("babel-jest").createTransformer({
//   plugins: ["babel-plugin-import-remove-resource-query"]
// })

const babelDevPlugins = [
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-transform-runtime",
  "babel-plugin-import-remove-resource-query"
]

const config = {
  babelrc: false,
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            modules: "commonjs",
            debug: false
          }
        ],
        "@babel/preset-react"
      ],
      plugins: babelDevPlugins
    },
    production: {
      presets: [["@babel/preset-env", { modules: false }], "@babel/preset-react"],
      plugins: babelDevPlugins
    },
    development: {
      presets: [["@babel/preset-env", { modules: false }], "@babel/preset-react"],
      plugins: babelDevPlugins
    }
  }
}
module.exports = require("babel-jest").createTransformer(config)
