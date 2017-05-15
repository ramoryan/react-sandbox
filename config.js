const autoprefixer = require('autoprefixer')
const resolve = require('path').resolve
const webpack = require('webpack')

module.exports = {
  // https://webpack.js.org/configuration/entry-context/#context
  context: resolve(__dirname, 'src'),

  // https://webpack.js.org/configuration/output/
  output: {
    // https://webpack.js.org/configuration/output/#output-filename
    filename: 'bundle.js',

    // https://webpack.js.org/configuration/output/#output-path
    path: resolve(__dirname, 'dist'),
  },

  resolve: {
    // https://webpack.js.org/concepts/modules/
    modules: [
      resolve(__dirname, 'src'),
      'node_modules',
      'bower_components'
    ],

    // https://webpack.js.org/configuration/resolve/#resolve-descriptionfiles
    descriptionFiles: ['package.json', 'bower.json'],

    // https://webpack.js.org/configuration/resolve/#resolve-extensions
    extensions: [ '.js', '.jsx', '.scss', '.svg' ]
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
        include: /flexboxgrid/
      },
      {
        // https://github.com/webpack-contrib/sass-loader
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
          options: {
            modules: true,
            camelCase: true
          }
        },
        /* {
          loader: 'postcss-loader'
        },*/
        {
          loader: 'sass-loader', // compiles Sass to CSS
          options: {
            includePaths: [
              'bower_components/styles/src/',
              'src/styles'
            ]
          }
        }]
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader?noquotes'
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
    }),

    // https://webpack.js.org/plugins/provide-plugin/
    new webpack.ProvidePlugin({
      React      : 'react',
      PropTypes  : 'prop-types',
      classnames : 'classnames',
      Col        : 'exports-loader?Col!react-flexbox-grid/lib/components/Col',
      Row        : 'exports-loader?Row!react-flexbox-grid/lib/components/Row',
      Grid       : 'exports-loader?react-flexbox-grid/lib/components/Row'
    })
  ]
}
