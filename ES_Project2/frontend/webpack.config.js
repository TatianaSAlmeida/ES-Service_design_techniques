const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
        resolve: {
          extensions: ['.ts', '.js', '.jsx', '.css', '.png'],
        }
      },
    ],
  },
  resolveLoader: {
    modules: [
        path.join(__dirname, 'node_modules')
    ]
  },
  resolve: {
      modules: [
          path.join(__dirname, 'node_modules')
      ]
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("development"),
      },
    }),
  ],
};