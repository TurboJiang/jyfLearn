- MVVM  前端新贵
    Model 数据
        Page({
            data:{
                legends:[]
            }
        })
    View 视图
    WXML
    VM {{}} 占位符 wx:for...

    - MVC 经典的web开发模式

    Model=>SQL
    View=>静态页面
    Controller=>路由


    -webServer 提供一个webserver(软件，程序) web服务器硬件运行webserver程序
        通过ip实现http协议 找到所需资源 http://127.0.0.1:3000
        端口 不止一个服务
        ex: 
            3306端口：MYSQL、
            80端口:web服务

            <!-- 请求回应之后 与本地服务器断开  -->
        http.createServer(function(request,response){
            reponse.end("hello world");//返回想要的资源  end：用完即走 不是常连接
        })//创建一个http服务
            .listen(3000)//告知资源在3000端口

        request:用户N个 如何为N个用户提供服务？webserver一直在3000端口上伺服 
                所以request就能找到资源 每位用户到达会触发事件触发之后调用createServer上的回调函数
                通过request可以获得用户身份
        reponse:web服务最重要的是响应请求 http响应之后就断开reponse.end();