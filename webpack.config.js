const path = require(`path`)
const CleanWebpackPlugin = require(`clean-webpack-plugin`)

const commonPublicPath = `/dist/`

module.exports = {
  entry: {
    reactEbiSpecies: `./src/index.js`,
    reactEbiSpeciesBare: `./src/index.js`,
    reactEbiSpeciesClassyDemo: `./html/classyDemo.js`,
    reactEbiSpeciesBareDemo: `./html/bareDemo.js`
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: `dist`
    })
  ],

  output: {
    library: `[name]`,
    filename: `[name].bundle.js`,
    publicPath: commonPublicPath
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules\//,
        use: `babel-loader`
      }
    ]
  },

  devServer: {
    port: 9000,
    contentBase: path.resolve(__dirname, `html`),
    publicPath: commonPublicPath
  }
}
