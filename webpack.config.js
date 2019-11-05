const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [{
      test: /\.tsx$/,
      loader: 'babel-loader',
    },
    {
      test: /\.js$/,
      use: ['source-map-loader'],
      enforce: 'pre',
    },
    ],
  },
  externals: {
    react: 'commonjs react',
  },
  //   optimization: {
  //     minimize: false,
  //   },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
