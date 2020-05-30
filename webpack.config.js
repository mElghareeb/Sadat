const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

  // webpack will take the files from ./src/index
  entry: './src/index.tsx',

  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js', ".json"]
  },

  module: {
    rules: [

      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(tsx|ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript'],
          }

        },
      },

      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document

      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default

        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      // {
      //   test: /\.(png|jpg|jpeg|gif|ico)$/,
      //   exclude: /node_modules/,
      //   use: [{
      //     loader: 'file-loader',
      //     options: {
      //       name: '[path][name].[ext]?[hash]',
      //     },
      //   }], // ?name=[name].[ext] is only necessary to preserve the original file name
      // },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  },
  devtool: "source-map",
    devServer: {
    inline: true,
    compress: true,
    historyApiFallback: true,
    port: 3000,
    publicPath: "/",
    hot: true,
    watchOptions: {
      poll: 7000
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
};