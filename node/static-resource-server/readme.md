## 静态资源
上传到服务器之后内容不会随着服务的运行而改变:html静态文件 css js 图片
- 学会上传图片
- formidable 解析请求第三方的包(npm i formidable -S)
    fields 非input[type="file"]的提交项
    files input[type="file"]的提交项
    根据 input 的 name 属性来获取值
 
##静态资源服务
如果static文件夹下有index.html则直接打开 否则列出所有文件
- 请求路径和磁盘路径 一一对应(端口号/文件名——>访问文件)
#文件打开方式
资源管理器打开：file:///D:/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/jyfLearn/node/static-resource-server/static/index.html（file://本地文件读取协议）  图片读取√
（服务器）端口打开：http://localhost:8080/ （http协议） 图片读取×
html 里面引入的资源 都会发出请求

##技术总结##
请求:都是/static/*.* 对应的磁盘位置static下面 也是一一对应的
1. 拿到req.url
2. 读取 磁盘下面同一个位置 返回
3. 静态资源通常会放在某一个目录下(static) 所以请求都以某个目录开头^