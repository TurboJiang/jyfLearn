// 将自己的电脑跑成服务器

// 服务器端

// 引入依赖
// import express from 'express'
// import morgan from 'morgan'
// import path from 'path'
// import socketIO from 'socket.io'
// import { disconnect } from 'cluster';

// const app = express()
// app.set('views', path.resolve(__dirname, 'views'))
// app.set('view engine', 'ejs')

// app.use(morgan('dev'))

// app.get('/',(request,response)=>{
//     // 将拿到的返回值渲染到模板上
//     response.render('index')
// })
// // 分配一个端口
// let server = app.listen(3000,()=>{
//     console.log('嘻嘻嘻嘻嘻')
// })

// let io = socketIO(server) 
// //监听连接事件connection
// io.on('connection',(socket)=>{
//     console.log('connected')
//     // 监听断开连接的方法
//     socket.on('disconnect',()=>{
//         console.log('disconnected')
//     })
//     // 服务器端接收message方法
//     socket.on('message',(msg)=>{
//         console.log(msg)
//     })
//     // 服务器端定义方法 发送出去 客户端接收 
//     socket.on('message',(msg)=>{
//         io.emit('message',msg)
//     })
// })

// Node 自带http 可直接引入
var http = require('http')
http.createServer(function(request,response){
    // 发送http设置
    response.writeHead(200,{'Content-Type':'text/plain'})
    // 向客户端发送一个hello world
    response.end('hello world')
}).listen(8080)

console.log('hahahha')
