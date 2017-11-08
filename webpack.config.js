const path = require('path');

module.exports = {
    entry: './src/js/app.jsx',
    output: {
      path: path.resolve(__dirname, 'dist/js'),
      filename: 'app.js'
    },
    module: {
      rules: [
        // {
        //   test: /\.(js|jsx)$/,
        //   enforce: 'pre',
        //   exclude: /(node_modules|bower_components)/,
        //   use: "eslint-loader"
        // },
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader"
        },
        {
          test: /\.(css|scss)/,
          use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            },
            {
              loader: "css-loader", // translates CSS into CommonJS
              options: {
                importLoaders: 1
              }
            },
            {
              loader: "sass-loader"
            },
            {
              loader: "postcss-loader"
            }

          ]
        },
        {
          test: /\.(png|jpg|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 25000
              }
            }
          ]
        }
      ]
    },
    plugins: []
};
