node 让js 来到了后端

服务器，linux
文件系统操作 fs
连接数据库 db

没有DOM

文件读取 要花费时间 时间花费在文件定位(参数1)，打开文件，将文件内容读到内存中 输出到命令行 文件越大花费时间越多  要花费时间的东西在js中是异步的 
          异步有两种解决方案：
                1.callback回调函数  fs.readFile('path','utf8',function(err,data){
                 console.log();   
                })
                2. promise + .then() 
                    分开，Promise 是类 用于处理耗时异步问题的类 为了防止回调地狱，看到耗时问题就用出一个Promise实例
                    resolve能力 将控制权交给then 并将结果resolve（data）传过去， reject失败了 就catch（e）{}