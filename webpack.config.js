const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.mp3$/,
        use: ['babel-loader', 'mp3-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolveLoader: {
    alias: {
      'mp3-loader': path.resolve(__dirname, 'src/mp3-loader.js'),
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};