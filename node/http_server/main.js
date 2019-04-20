{/* <script src="./http"></script> */}
// require（关键字）引入一个模块，
const http = require('http');
let i=0;
http
    .createServer(function(request,response){
        console.log(i);
        response.end(`hello world!${++i}`);
    })
    .listen(3000);


