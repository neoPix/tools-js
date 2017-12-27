process.env.NODE_ENV = 'production';

const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dist.config');

const spinner = ora('building for production...');
spinner.start();

rm('./dist', (err) => {
  if (err) throw err;
  webpack(webpackConfig, (webpackerr, stats) => {
    spinner.stop();
    if (webpackerr) throw webpackerr;
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    }));

    console.log(chalk.cyan('  Build complete.\n'));
  });
});
