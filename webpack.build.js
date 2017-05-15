const resolve = require('path').resolve
const webpack = require('webpack')
const config = require('./config.js')

const buildConfig = Object.assign({}, config)

buildConfig.entry = [
  './components/app/App.jsx'
]

buildConfig.output.filename = 'sandbox.js'
buildConfig.output.library = 'sandbox'
buildConfig.output.libraryTarget = 'umd'
buildConfig.output.umdNamedDefine = true

buildConfig.devtool = false

module.exports = buildConfig
