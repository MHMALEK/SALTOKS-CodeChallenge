// webpack plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// image size utils
const ImageminPlugin = require('imagemin-webpack-plugin').default;

// utils
const devMode = process.env.NODE_ENV === 'production' ? false : true;
const pathTo = require('../../util/pathTo');

module.exports = [
   new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
   }),
   new HtmlWebpackPlugin({
      title: 'SALTO KS Code Challenge',
      filename: 'index.html',
      languageCode: 'en-EN',
      template: pathTo.htmlTemplateSrc,
      inject: true,
      favicon: pathTo.favIconSrc,
   }),
   new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production',
      optipng: {
         optimizationLevel: 9,
      },
      pngquant: {
         quality: '95-100',
      },
   }),
];
