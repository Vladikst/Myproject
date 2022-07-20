const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require('path')


const extractSass = new ExtractTextPlugin({
  filename: "assets/css/style.min.css",
});

module.exports = {
    entry: {
        main: './src/index.js',
        main_en: './src/index_en.js'
    },
    devtool: "source-map",
    output: {
        filename: 'assets/js/[name].min.js',
        path: path.resolve(__dirname, 'public')
    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }]
      },
      {
          test: /\.scss$/,
          use: extractSass.extract({

              use: [
                  {
                      loader: "css-loader",
                      options: {
                          minimize: true,
                      }
                  },
                  {
                      loader: "resolve-url-loader"
                  },
                  {
                      loader: "sass-loader",
                      options: {
                          sourceMap: true
                      }
                  }
              ],
              fallback: "style-loader",
              publicPath: "../../"
          })
      },
    {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        loader: "url-loader?limit=50000&name=assets/fonts/[name].[ext]"
    },
    {
        test: /\.(jpg|png)$/,
        loader: "file-loader?name=assets/images/[name].[ext]"
    }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Popper: ['popper.js', 'default'],
    }),
    new UglifyJsPlugin({
        test: /\.js($|\?)/i,
        sourceMap: true,
        uglifyOptions: {
            compress: true
        }
    }),
    extractSass
  ]
};
