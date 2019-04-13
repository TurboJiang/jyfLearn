// 文件处理

// fs模块 是node后端开发的一部分
const fs = require('fs');

// 以后端的形式执行js

// 读取文件  读取文件是异步的 使用回调函数处理异步问题  utf8指定文字格式  固定使用err
// fs.readFile('./a.txt', 'utf8', function (err, data) {
//     console.log(data);
//     if (err) {
//         console.log(err);
//     }//使用callback回调函数处理异步 规定执行次序
//     fs.readFile('./b.txt', 'utf8', function (err, data) {
//         console.log('--------------------', data);
//     });
// });


// 将callback处理异步的方案抛弃
const fileAPromise = new Promise((resolve, reject) => {
    // 专门用来装耗时的任务
    fs.readFile('./a.txt', 'utf8', (err, data) => {
        // 流程控制权如何移交
        resolve(data);
    });
    
});
const fileBPromise=new Promise((resolve,reject)=>{
        fs.readFile('./b.txt','utf8',(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    })
// 将内部的耗时内务运行起来
fileAPromise.then(data=>{
    console.log(data);
    return fileBPromise;
})
.then(data=>{
    console.log(data);
})