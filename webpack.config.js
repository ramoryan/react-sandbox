// https://webpack.js.org/guides/hmr-react/

const resolve = require('path').resolve
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./config.js')

const devConfig = Object.assign({}, config)
devConfig.entry = [
  // activate HMR for React
  'react-hot-loader/patch',

  // bundle the client for webpack-dev-server
  // and connect to the provided endpoint
  'webpack-dev-server/client?http://localhost:8080',

  // bundle the client for hot reloading
  // only- means to only hot reload for successful updates
  'webpack/hot/only-dev-server',

  // the entry point of our app
  './index.jsx'
]

// necessary for HMR to know where to load the hot update chunks
devConfig.output.publicPath = '/'

devConfig.devtool = 'inline-source-map', // https://webpack.js.org/configuration/devtool/#for-development

devConfig.devServer = {
  // enable HMR on the server
  hot: true,

  // match the output path
  contentBase: resolve(__dirname, 'dist'),

  // match the output `publicPath`
  publicPath: '/',

  inline: true
}

devConfig.plugins.push(
  // enable HMR globally
  new webpack.HotModuleReplacementPlugin(),

  // prints more readable module names in the browser console on HMR updates
  new webpack.NamedModulesPlugin(),

  // https://github.com/jantimon/html-webpack-plugin
  new HtmlWebpackPlugin({
    title: 'React Sandbox',
    template: 'assets/index.ejs'
  })
)

module.exports = devConfig
