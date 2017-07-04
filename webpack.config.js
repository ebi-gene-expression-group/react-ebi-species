var webpack = require('webpack')
var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    ebiSpeciesIcon: './src/index.js',
    demo: './html/demo.js',
    dependencies: ['react', 'react-dom']
  },

  output: {
    library: '[name]',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: 'html/dist/'
  },

  plugins: [
    new CleanWebpackPlugin(['html/dist'], {verbose: true, dry: false}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'dependencies',
      filename: 'vendorCommons.bundle.js',
      minChunks: Infinity     // Explicit definition-based split, see dependencies entry
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules\//,
        use: ['babel-loader']
      }
    ]
  },

  devServer: {
    port: 9000
  }
}
