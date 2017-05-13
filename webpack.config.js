// https://webpack.js.org/guides/hmr-react/

const autoprefixer = require('autoprefixer')
const resolve = require('path').resolve
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: resolve(__dirname, 'src'),

  entry: [
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
    // './components/app/App.jsx'
  ],
  output: {
    // the output bundle
    filename: 'bundle.js',

    library: 'witchapp',
    libraryTarget: 'umd',
    umdNamedDefine: true,

    path: resolve(__dirname, 'dist'),

    // necessary for HMR to know where to load the hot update chunks
    publicPath: '/'
  },
  resolve: {
    modules: [
      resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: [ '.js', '.jsx', '.scss' ]
  },

  devtool: 'inline-source-map',

  devServer: {
    // enable HMR on the server
    hot: true,

    // match the output path
    contentBase: resolve(__dirname, 'dist'),

    // match the output `publicPath`
    publicPath: '/'
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
              'ie >= 10',
            ],
          }),
        ]
      },
    }),

    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),

    // https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: 'React Sandbox',
      template: 'assets/index.ejs'
    }),

    // https://webpack.js.org/plugins/environment-plugin/
    // new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
}
