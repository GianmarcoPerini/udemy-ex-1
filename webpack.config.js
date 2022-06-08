const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './view/js/app.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'img/[hash][ext][query]',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './view/template.html',
    }),
    new MiniCssExtractPlugin(),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'view'),
    },
    compress: true,
    port: 9000,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
