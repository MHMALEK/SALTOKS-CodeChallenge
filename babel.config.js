const babelDevPlugins = [
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-transform-runtime"
]

const babelTestPlugins = [
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-transform-runtime"
]

const bableProductionPlugins = [
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-transform-runtime"
]

module.exports = {
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
      plugins: babelTestPlugins
    },
    production: {
      presets: [["@babel/preset-env", { modules: false }], "@babel/preset-react"],
      plugins: bableProductionPlugins
    },
    development: {
      presets: [["@babel/preset-env", { modules: false }], "@babel/preset-react"],
      plugins: babelDevPlugins
    }
  }
}
