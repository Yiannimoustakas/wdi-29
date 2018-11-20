const path = require('path');

module.exports = {

  // starting point for the webpack build process:
  entry: './src',

  // specify what processing webpack should perform on our input files:
  module: {
    rules: [
      {
        test: /\.jsx?/i, // files which match this regex will be processed: .js or .jsx
        loader: 'babel-loader',
        options: {
          plugins: [
            ['transform-react-jsx']
          ]
        }
      }
    ]
  }, //module

  // where to put the transformed output from the processing stage:
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js' // this is the file we need to load in our index.html
  },

  devtool: 'inline-source-map', // see errors in the original .jsx source files

  devServer: {
    // options to pass to the webpack dev server:
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    historyApiFallback: true
  }

};
