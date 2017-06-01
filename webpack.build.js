const webpack = require('webpack')
const config  = require('./webpack.config.js')

const buildConfig = Object.assign({}, config)

buildConfig.entry = [
  './components/app/App.jsx'
]

buildConfig.output.filename       = 'sandbox.js'
buildConfig.output.library        = 'sandbox'
buildConfig.output.libraryTarget  = 'umd'
buildConfig.output.umdNamedDefine = true

buildConfig.devtool = false

buildConfig.plugins.push(
  new webpack.ProvidePlugin({
    'process.env': {
      NODE_ENV : JSON.stringify('production')
    }
  })
)

module.exports = buildConfig // eslint-disable-line no-undef
