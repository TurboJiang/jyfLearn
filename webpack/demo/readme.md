大厂的代码风格都是一样的 eslint管理代码风格
控制代码风格 npm run eslint

- eslint是js风格  自由是建立在规范上的
- __dirname返回绝对的物理路径（项目未来发布到哪里都行）
- 注意查看公司.eslintrc是什么？ 采用一个业内的规范，严格执行公司的
- webpack-dev-server 编译内容放在内存中（热更新，每次上传文件性能差）
    删除dist文件夹 照样运行 main.js依旧可以引入html文件
    webpack-dev-server不会生成dist目录，他只会将你之前创建的dist目录放进内存之后，删除也可以照旧使用
- file-loader 加载css文件中 如果里面有图片使用file-loader编译
- "build":"webpack --mode production" 出现了dist文件夹 文件夹内出现了index.html,mian.css,main.js,图片

安装库、插件
 npm install webpack webpack-cli webpack-dev-server -D
 npm install babel-core babel-cli babel-preset-env -D
 npm install eslint eslint-loader -D
 npm install babel-loader "^7.1.4"
 npm install html-webpack-plugin -D
 npm install css-loader style-loader file-loader -D
 npm install extract-text-webpack-plugin -D "^4.0.0-beta.0"

 1. 将js文件用babel-loader编译
 2. 在编译之前用eslint整理代码


{
    <!-- 扩展使用eslint 开启配置信息 -->
    "extends": "eslint:recommended",
    <!-- 设置解析器选项（必须设置这个属性） -->
    "parserOptions": {
      "ecmaVersion": 6
    },
    <!-- 脚本在执行期间访问的额外的全局变量;当访问未定义的变量时，no-undef 规则将发出警告。如果你想在一个文件里使用全局变量，推荐你定义这些全局变量，这样 ESLint 就不会发出警告了。你可以使用注释或在配置文件中定义全局变量。 -->
    "globals": {
      "_": true
    },
    <!-- 开发环境前端和后端均支持 -->
    "env": {
      "browser": true,
      "node": true
    },
    <!-- 规则：没有console，提示警告 quotes一定要适应双引号 double/single-->
    "rules": {
      "no-console": "warn",
      <!-- 0/off允许 1/warn 2/error -->
      "quotes":[2,"double"]
    }
  }
  