const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const {ENV} = process.env

function productionBuildOutput() {
  return {
    entry: {
      index: './main.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
  }
}

module.exports = {

  ...productionBuildOutput(),

  devServer: {
    port: 8080,
    inline: true,
    liveReload: false,
    historyApiFallback: true,
    proxy: {
      '/': 'http://127.0.0.1:3000'
    }
  },


  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$|.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    // new MinifyPlugin()
  ]
}