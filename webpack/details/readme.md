yarn add webpack webpack-cli webpack-dev-server -D
yarn add babel-core babel-cli babel-preset-enc -D
yarn lodash


devDependencies 开发阶段
Dependencies 所有阶段

webpack是打包工具 构建应用

打包之前 位于development阶段 src/
打包之后 处于build阶段 dist/ 此目录下不再需要webpack 这些东西将会部署到服务器 运行node dist/main.js 打包的内容显示到服务器上

- webpack-dev-server 使用命令搭起页面 webpack打包好之后，将打包好的内容在浏览器中8080端口启动，是前端开发的标准
首先 在一个端口打开web server
可以做实时的编译 watch Hot Mode Reload(HMR) 热更新：改变页面结构之后，页面上不用刷新，会自动更新

我们的网页webpack打包的过程是这样的
    index.js是入口，会打包成为main.js
    需要index.html 这个是首页的模板 编译完的main.js会由webpack-dev-server自动的放在index.html的最后面 script引入