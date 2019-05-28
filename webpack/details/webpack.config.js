// 配置文件的配置方案

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports={
    // 入口
    entry:'./src/index',
    // 出口
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                // 配置js 
                test:/\.js$/,
                include:[
                    path.resolve(__dirname,'src')
                ],//只编译src目录下的
                use:'babel-loader'//使用方法
            },
            {
                // 配置css
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    resolve:{
        extensions:['.js','.css'],
        modules:[
            path.resolve(__dirname,'node_modules')
        ]
    },
    // 由于插件可以携带参数/选项,你必须在 webpack 配置中,向 plugins属性传入new实例。
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'src/index.html'
        })
    ],
    // 设置端口
    devServer:{
        port:'1116'
    }
}