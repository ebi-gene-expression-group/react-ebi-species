const path = require(`path`)
const CleanWebpackPlugin = require(`clean-webpack-plugin`)

const commonPublicPath = `/dist/`

module.exports = {
  entry: {
    reactEbiSpeciesDemo: `./html/demo.js`
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
      chunks: `all`,
      minSize: 1,
      cacheGroups: {
        reactEbiSpecies: {
          test: /[\\/]src[\\/]/,
          name: `reactEbiSpecies`,
          priority: -20
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: `vendors`,
          priority: -10
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
