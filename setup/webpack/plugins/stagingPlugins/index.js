/* prod plugins */

const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackBundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

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
      BROWSER: JSON.stringify(true),
      BASE_API_URL: JSON.stringify(
          'https://snapp-web-api-snapp-ode-003.apps.private.teh-1.snappcloud.io/api/v1/'
      ),
    },
  }),
  new CopyPlugin([{from: pathTo.publicDir, to: pathTo.distDir}]),
  new WorkboxPlugin.InjectManifest({
    swDest: 'service-worker.js',
    importWorkboxFrom: 'local',
    importsDirectory: 'wb-assets',
    swSrc: pathTo.swSrc,
  }),
];
