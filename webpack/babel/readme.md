##面试必考

 "build": "babel index.js -o babel-compiled.js",
 "test": "echo \"Error: no test specified\" && exit 1",
 "eslint": "eslint test.js"


生产线 webpack 代码生产工艺 全面定义开发流程——工作流 work flow

- html + css + js = development
    html is a template {{}}
    css  stylus
    js   es6,7,8,9 =>es5
最后代码运行的env

- js 
    babel可以让js使用最新的技术，使用babel将js语言编译成es5
     npm run运行脚本的命令 npm run build 运行代码 
        build脚本名字 “babel index.js -o babel-compiled.js”
     yarn add babel-core babel-cli babel-preset-env babel工具安装
     npm install -g yarn yarn安装
     npm init -y 初始化node文件

- babel
    babel-core 核心的转译库
    babel-cli babel命令行commandline
    babel-preset-env babel预编译的规则 ——> 配置文件.babelrc {"presets":["env"]}(按照当前环境env编译)
                                        ————————>build
- dev
- preset 预处理
    env搞不定 可以安装插件babel-plugin
        yarn add babel-plugin-transform-object-rest-spread
- eslint
    yarn add eslint  可组装的js&jsx检查工具

-webpack
    install:
        webpack-dev-server 边写边编译
        webpack-cli
        webpack


    webpack --mode developments
    npm run build
    yarn global add webpack webpack-cli



- 开发时 development强调代码的可读性 dev
- 上线时 production代码要压缩,混淆build 服务器上
- 测试  test 局域网