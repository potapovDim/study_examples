
const env = process.env.NODE_ENV

const sourceFile = './main.js'

module.exports = {
  entry: sourceFile,
  output: {
    path: './',
    filename: "index.js"
  },

  devServer: {
    port: 5555,
    inline: true,
    historyApiFallback: true
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['babel-plugin-transform-decorators-legacy']
        }
      }
    ]
  }
}