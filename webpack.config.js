/* global __dirname, require, module */

const webpack = require('webpack')
const path = require('path')
const env = require('yargs').argv.env // use --env with webpack 2
const pkg = require('./package.json')

let libraryName = pkg.name

let outputFile, mode

if (env === 'build') {
  mode = 'production'
  outputFile = libraryName.split('.')[0] + '.min.js'
} else {
  mode = 'development'
  outputFile = libraryName
}

const config = {
  mode: mode,
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: outputFile,
    library: libraryName.split('.')[0],
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        },
        enforce: 'post',
        exclude: /node_modules|\.spec\.js$/,
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  }
}

module.exports = config
