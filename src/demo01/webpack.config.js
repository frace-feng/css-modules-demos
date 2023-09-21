const { merge } = require("webpack-merge");
const path = require('path')
const common = require("../../webpack.config.js");


module.exports = merge(common, {
  entry: path.resolve(__dirname,'index.js'),
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          }
        ],
      },
    ]
  }
})