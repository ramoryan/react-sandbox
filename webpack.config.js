const resolve = require('path').resolve
const webpack = require('webpack')

const __IS_DEV__ = (process.env.NODE_ENV !== 'production')

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: () => {
      if (!__IS_DEV__) {
        return [
          require('autoprefixer')({
            browsers: [
              'last 3 version',
              'ie >= 10'
            ]
          })
        ]
      }
    }
  }
}

const config = {
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
    extensions: [ '.js', '.jsx', '.scss', '.svg', '.jpg', '.png', '.mp3' ],

    // https://webpack.js.org/configuration/resolve/#resolve-alias
    alias: {
    }
  },

  module: {
    rules: [
      {
        test: /\.(?:js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              configFile: resolve(__dirname, '.eslintrc'),
              optionsReport: {
                filePath: 'eslint.xml'
              }
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader?modules', ]
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
            camelCase: true,
            localIdentName: __IS_DEV__ ? '[local]' : '[path][name]__[local]--[hash:base64:5]'
          }
        },
        postcssLoader,
        {
          loader: 'sass-loader', // compiles Sass to CSS
          options: {
            includePaths: [
              resolve(__dirname, 'bower_components/styles/src'),
              resolve(__dirname, 'src/styles'),
              resolve(__dirname, 'node_modules')
            ]
          }
        }]
      },
      {
        test: /\.svg$/,
        loader: __IS_DEV__ ? 'file-loader' : 'svg-url-loader?noquotes',
        options: __IS_DEV__ ? {
          name: 'images/[name].[ext]'
        } : '' // ha itt object van átadva, akkor marad quote!
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader',
        options: {
          limit: __IS_DEV__ ? 10 : 10000000,
          name: 'fonts/[name].[ext]'
        }
      },
      {
        // ha 10 megánál nagyobb képeink, hangjaink vannak, akkor a limitet meg kell növelni!
        test   : /\.(jpe?g|png|gif)$/i,
        loader : 'url-loader',
        options : {
          limit: __IS_DEV__ ? 10 : 10000000,
          name: 'images/[name].[ext]'
        }
      },
      {
        test    : /\.(mp3|wav|ogg)$/,
        loader  : 'url-loader',
        options : {
          limit: __IS_DEV__ ? 10 : 10000000,
          name: 'sfx/[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    // https://webpack.js.org/plugins/provide-plugin/
    new webpack.ProvidePlugin({
      React      : 'react',
      PropTypes  : 'prop-types',
      classnames : 'classnames',
      autobind   : 'autobind-decorator'
    })
  ]
}

module.exports = config // eslint-disable-line no-undef
