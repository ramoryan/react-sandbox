const autoprefixer = require('autoprefixer')
const resolve = require('path').resolve
const webpack = require('webpack')

module.exports = {
  context: resolve(__dirname, 'src'),

  output: {
    // the output bundle
    filename: 'bundle.js',

    path: resolve(__dirname, 'dist'),
  },

  resolve: {
    modules: [
      resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: [ '.js', '.jsx', '.scss' ]
  },

  module: {
    rules: [
      {
        test: /\.(?:js|jsx)$/,
        use: [ 'babel-loader', ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader?modules', ],
      },
      {
        // https://github.com/webpack-contrib/sass-loader
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader?modules' // translates CSS into CommonJS
        },/* {
          loader: 'postcss-loader'
        },*/ {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      }
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: [
              'last 3 version',
              'ie >= 10'
            ]
          })
        ]
      }
    })
  ]
}
