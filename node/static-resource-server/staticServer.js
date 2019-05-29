// 将static下的资源文件通过磁盘路径一一访问到
const http = require('http');
const fs = require('fs');
const path = require('path');
// 浏览器转圈 说明没有响应

http.createServer((req, res) => {
    console.log(req.url);
    //  /static/indecx.html->
    //  /static/xxx.png->
    const url = req.url;
    //^以正则匹配static文件
    if (/^\/static\//.test(url)) {
        staticServer(req, res);
        return false;
    }

    // 请求index.html文件：先读出文件的内容 (指定文件目录，读取文件格式，回调)
    // fs.readFile('./static/index.html', 'binary', (err, file) => {
    //     // 读取到文件之后以二进制格式写回
    //     res.write(file, 'binary');
    //     res.end();
    // })//只响应了html内容、图片内容未响应 所以图片资源出不来

}).listen(8080, () => {
    console.log('server is running 8080')
})
function staticServer(req, res) {
    // url与磁盘路径相等
    let url = req.url;
    if (url === '/static/') url += 'index.html'//localhost:8080/static/+index.html
    console.log('url', url);
    // 路径拼接 专有模块——>物理路径 不同设备__dirname不一样 便于查找 static文件
    const filePath = path.join(__dirname, url);
    console.log(filePath)
    // 读之前文件是否存在
    fs.exists(filePath, exists => {
        if (!exists) {
            res.end(`the request url: ${url} is not found`);
        } else {
            fs.readFile(filePath, 'binary', (err, file) => {
                if (!err) {
                    res.write(file, 'binary');
                    res.end();
                }
            })
        }
    })
}