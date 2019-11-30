// webpack core packages
const webpack = require('webpack');
const merge = require('webpack-merge');

// optimization plugins and tools
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// webpack utils
const common = require('./webpack.common');
const pathTo = require('./util');
const webpackPlugins = require('./plugins');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: pathTo.nodeModulesDir,
      }),
      new OptimizeCSSAssetsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: webpackPlugins.stagingPlugins,
});
