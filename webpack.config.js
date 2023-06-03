const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'static/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static/dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'static'),
      },
      hot: true,
      port: 3000, // Choose the port number that suits your needs
    },
};