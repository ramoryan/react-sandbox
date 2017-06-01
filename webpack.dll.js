const path    = require('path')
const webpack = require('webpack')

module.exports = { // eslint-disable-line no-undef
  context: process.cwd(),

  // Itt sorold fel, hogy miket szeretnél a dll-be rakni.
  entry: [
    'react',
    'react-dom',
    'classnames',
    'prop-types',
    'url',
    'strip-ansi',
    'react-hot-loader'
  ],

  target: 'node',

  resolve: {
    modules: [
      'node_modules'
    ]
  },

  output: {
    filename: 'vendor.dll.js',
    path: path.resolve(__dirname, 'dist'),

    // The name of the global variable which the library's
    // require() function will be assigned to
    library: 'vendor'
  },

  plugins: [
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      name: 'vendor',
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      path: path.join('dist', 'vendor.json')
    }),
    // new webpack.optimize.UglifyJsPlugin()
  ]
}
