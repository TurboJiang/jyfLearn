const fs = require('fs');//引入文件模块
const files = [];
// 一步步 目录走下去
const walk = function (path) {
    // 链式调用
    fs
        .readdirSync(path)//读取一个文件下的目录,同步
        .forEach(file => {//已经将目录读完，遍历 与readdirSync搭配使用
            // console.log(item);

            // 目录下有两种可能性：文件 或者 目录
            // 若是文件 判断是否是js文件 正则表达式判断 
            // 若是目录  递归

            const newPath = path + '/' + file;
            const stat = fs.statSync(newPath);//获取目录下的文件状态
            // console.log(stat);

            if (stat.isFile()) {
                if (/\.js$/.test(file)) {//判断是否为js文件  /.js/或者slice()
                    files.push(file);
                }
            } else if (stat.isDirectory()) {
                walk(newPath);//调用walk继续往下
            }
        })

    // fs.readdir(path,function(err,items){//异步
    //     console.log(items);
    // })

    // console.log('----');
}

walk('./src');
console.log(files);