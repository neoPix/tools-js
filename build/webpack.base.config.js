const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  output: {
    path: resolve('./dist/'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')],
      },
    ],
  },
};
