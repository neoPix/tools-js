const webpackConfig = require('../build/webpack.test.config');

module.exports = function karmaConfig(config) {
  config.set({
    basePath: '../',
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      './tests/**/*.spec.js',
      './src/**/*.js',
    ],
    reporters: ['progress', 'spec', 'coverage'],
    preprocessors: {
      './src/**/*.js': ['webpack', 'sourcemap'],
      './tests/**/*.spec.js': ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' },
      ],
    },
    port: 9876,
    runnerPort: 9100,
    colors: true,
    browsers: ['Chrome'],
    singleRun: true,
  });
};
