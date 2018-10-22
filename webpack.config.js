const path = require(`path`)
const CleanWebpackPlugin = require(`clean-webpack-plugin`)

const commonPublicPath = `/dist/`

module.exports = {
  entry: {
    reactEbiSpeciesDemo: `./html/demo.js`,
    reactEbiSpeciesDemoBare: `./html/demoBare.js`
    // dependencies: [`prop-types`, `react`, `react-dom`, `urijs`]
  },

  plugins: [
    new CleanWebpackPlugin([`dist`])
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
      },
      {
          test: /\.svg$/i,
          use: [
              {
                  loader: `file-loader`,
                  options: {
                      query: {
                          name: `[hash].[ext]`,
                          hash: `sha512`,
                          digest: `hex`
                      }
                  }
              }
          ]
      }
    ]
  },

  devServer: {
    port: 9000,
    contentBase: path.resolve(__dirname, `html`),
    publicPath: commonPublicPath
  }
}
