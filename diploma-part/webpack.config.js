
const env = process.env.NODE_ENV

const sourceFile = env === 'base' ? './main.js' : './main-server.js'

module.exports = {
  entry: sourceFile,
  output: {
    path: './',
    filename: "index.js"
  },
  devServer: {
    port: 5555,
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