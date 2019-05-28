const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                enforce: 'pre',// 前置类型:在编译js之前检测文件
                // 指定检测文件格式
                test: /\.jsx?$/,
                // exclude 排除掉node_modules文件不编译
                exclude: /node_modules/,
                // 使用eslint编译方法
                loader: 'eslint-loader'
            },
            // 为js定义规则
            {
                // ?匹配0次或1次 jsx不影响匹配.js文件 还可以匹配.jsx文件
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: 'babel-loader'
            },
            // 匹配css文件
            {
                test: /\.css$/,
                // 分离css文件 优先使用css渲染页面
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader'
                    ]
                })
            },
            // 图片
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        // 查找node_modules中安装的库
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    },
    // 配置服务器信息
    devServer: {
        // 端口
        port: 1116,
        // 帮助请求一个应用 请求数据
        before(app) {
            app.get('/api/test.json', function (req, res) {
                // 返回json
                res.json({
                    // 请求成功
                    code: 200,
                    // 提示信息
                    message: 'hello world'
                })
            })
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new ExtractTextPlugin('[name].css')
    ]
}