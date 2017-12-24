// This is the webpack config used for unit tests.
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const webpackConfig = merge(baseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'testing',
      },
    }),
  ],
});

delete webpackConfig.entry;

module.exports = webpackConfig;
