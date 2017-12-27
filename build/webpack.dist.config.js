// This is the webpack config used for unit tests.
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const webpackConfig = merge(baseConfig, {
  entry: {
    bundle: './src/index.js',
    'bundle.min': './src/index.js',
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      sourcemap: false,
      include: /\.min\.js$/,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production',
      },
    }),
  ],
});

webpackConfig.output.library = 'toolsJs';
webpackConfig.output.libraryTarget = 'commonjs2';

module.exports = webpackConfig;
