const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
module.exports={
    entry:"./src/index.ts",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js",
        //告诉webpack不使用箭头函数
        environment:{
            arrowFunction:false,
            const:false
        }
    },
    module:{
        rules:[
            {
                test:/\.ts/,
                use:[
                    {
                        //指定加载器
                        loader:'babel-loader',
                        //设置babel
                        options: {
                            presets: [
                              [
                                //指定环境的插件
                                '@babel/preset-env', 
                                //配置信息
                                { 
                                    //要兼容的目标浏览器
                                    targets:{
                                        "chrome":"58",
                                        "ie":"11"
                                    },
                                    //指定corejs的版本
                                    "corejs":"3",
                                    //使用corejs的方式“usage”表示按需加载
                                    "useBuiltIns": "usage" 
                                }
                              ]
                            ]
                          }
                    },
                    'ts-loader'],
                exclude:/node_modules/
            },
            //设置less文件的处理
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    //引入postcss
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:()=>{
                                    "postcss-preset-env",
                                    {
                                        browsers:'last 3 versions'
                                    }
                                }
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            //shezhi 标题
            title:"zheshi",
            //shezhi 模板
            template:"./src/index.html"
        }),
    ],
    resolve:{
        extensions:['.ts','.js']
    },
    //mode:'development',
    mode:'production'
}