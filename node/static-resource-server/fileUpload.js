// 处理用户提交图片请求
const http = require('http');
// npm i formidable -S 解析请求第三方的包
const formidable = require('formidable');
// 文件操作模块
const fs = require('fs')
// 引入path模块
const path = require('path')

// 创建服务器 端口8080
http.createServer((req, res) => {
    // 当请求路径为upload且方法为post时
    if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
        // 开始解析文件
        const form = new formidable.IncomingForm();
        // 上传文件的目标目录
        form.uploadDir = './static/';
        form.parse(req, (err, fields, files) => {
            console.log(fields, files);
            // <input type="file" name="upload">
            const oldPath = files.upload.path;
            const fileName = files.upload.name;
            // 防止文件夹名称发生改变 获取到当前文件夹名称之后再进行拼接
            const dirname = path.dirname(oldPath);// oldPath: 'static\\upload_8dc83e16de8cc5076bebde1885ed9981'
            const newPath = path.join(dirname, fileName);
            // 重命名
            fs.rename(oldPath, newPath, (err) => {
                res.writeHead(200, {
                    'Content-Type': 'text/html;charset=utf8'
                });
                // 不再出现响应 end
                res.end('文件上传完毕');
            });
        })
        return false;
    }
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    });
    res.end(
        `
            <form action="/upload" method="POST" enctype="multipart/form-data">
                <input type="file" name="upload">
                <input type="submit" value="submit">
                <input type="text" name="nickname">
            </form>
        `
    )
}).listen(8080, () => {
    console.log('server is running port 8080');
})