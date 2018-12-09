module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha'],
    files: [{
      pattern: 'test/index.js'
    }],
    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      resolve: { modules: ['src', 'test', 'node_modules'] },
      module: { rules: [{ test: /\.js$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ }] }
    },
    webpackMiddleware: { logLevel: 'warn' }
  })
}
