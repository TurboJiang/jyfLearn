- 无编译无代码
    webpack已经成为工作流程的霸主
编译过程和js的promise一样 是异步操作
1. 代码 写在 dev src/
2. 上线在 build dist/
3. 启动一个web服务器 webpack-dev-server既编译代码又启动服务器

- webpack html template 插件
    plugin:html-webpack-plugin

- log 不在根目录下，怎么找到它呢？多写地址？./utils/log.js  X
    alias路径的缩写       √
    先resolve(找.Js文件)-->module(rules->寻找.js文件 交给babel-loader执行)

- babel-core babel-cli babel-preset-env解决了大部分编译问题
  babel-loader存在一丢丢兼容性问题
    先解决rules 外层是module  若问题无法解决 使用resolve:extensions:['.js']

- 8080 webpack-dev-server html-webpack-plugin 
    template ./src/index.html
    为什么js运行了 
        html + js
    module: {
        rules: [
            {
                // 正则表达式匹配文件
                test: /\.js$/,
                include:[
                    // 只处理src文件夹下的文件，其他目录忽略
                    path.resolve(__dirname,'src')
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
    }



npm install  webpack webpack-cli webpack-dev-server -D
npm install html-webpack-plugin -D

 <script type="text/javascript" src="main.js"></script>打包成main.js文件引入

 将模板文件(由webpack入口文件index.js开始编译成main.js)形成新的html，在下面将webpack编译的main.js文件引入 形成首页(并不是一开始的模板文件)————>js + html

- webpack 一切可打包 打包到js里
css对于js 来说就是个文本
img对于js 打包成base64
但是css应该独立打包，性能优化的需要
main.js 显示是最慢的 一起打包会导致css加载最慢 单独打包css会优先渲染出来


extract-text-webpack-plugin -D 版本"^4.0.0-beta.0" npm install