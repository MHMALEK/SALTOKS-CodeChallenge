/* prod plugins */

const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackBundleAnalyzerPlugin = require('webpack-bundle-analyzer')
   .BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// utils
const pathTo = require('../../util/pathTo');

module.exports = [
   new CleanWebpackPlugin(),
   new WebpackBundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: pathTo.reportSrc,
      defaultSizes: 'gzip',
   }),
   new webpack.DefinePlugin({
      'process.env': {
         BASE_API_URL: JSON.stringify('https://api.github.com'),
         NODE_ENV: JSON.stringify('production'),
      },
   }),

   new CopyPlugin([{ from: pathTo.publicDir, to: pathTo.distDir }]),
   new WorkboxPlugin.InjectManifest({
      swDest: 'service-worker.js',
      importWorkboxFrom: 'local',
      importsDirectory: 'wb-assets',
      swSrc: pathTo.swSrc,
   }),
];
