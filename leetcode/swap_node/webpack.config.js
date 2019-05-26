const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // 由入口文件开始，输出到dist文件夹下的main.js
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            // 查找css文件
            {
                test: /\.css$/,
                // use:['style-loader','css-loader'] 一起打包css渲染最慢 dom要求css渲染快
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })//独立打包
            },
            // 查找js文件
            {
                // 正则表达式匹配文件
                test: /\.js$/,
                include: [
                    // 只处理src文件夹下的文件，其他目录忽略
                    path.resolve(__dirname, 'src')
                ],
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        //与log相关的文件的路径同步解析为src目录下的utils下的log.js
        alias: {
            log$: path.resolve(__dirname, 'src/utils/log.js')//目录拼接
        },
        extensions: ['.js']//从js文件下手 找到log.js文件
    },
    plugins: [
        // 帮助html来到webpack开发模式中 将模板文件编译成html 交给webpack-dev-server作为首页
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        // 声明ExtractTextPlugin插件
        new ExtractTextPlugin('[name].css')//不指定文件格式，就会指定默认的文件
    ]
}