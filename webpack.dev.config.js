const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: './client/main.js',
  mode: 'development',
  output: {
    filename: 'js/[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devServer: {
    hot: true,
    static: {
      directory: resolve(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader']
      }
    ]
  },

  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'css/main.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'client/assets', to: 'assets' },
        {
          from: `${__dirname}/client/index.html`,
          to: 'index.html',
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = config