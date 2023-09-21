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
              modules: {
                auto: true,
                exportGlobals: true,//允许 css-loader 从全局类或 ID 导出名称
                localIdentName:'[path][name]---[local]---[hash:base64:5]',//允许配置生成的本地标识符
                // localIdentContext: path.resolve(__dirname),//允许为本地标识符名称重新定义基本的 loader 上下文
                localIdentHashSalt: "my-custom-hash",//允许添加自定义哈希值以生成更多唯一类
                namedExport: true,//本地环境启用/禁用 export 的 ES 模块
                exportLocalsConvention: "camelCase",//导出的类名称的样式:
                // exportOnlyLocals: false,//仅导出局部环境
              },
            },
          }
        ],
      },
    ]
  }
})