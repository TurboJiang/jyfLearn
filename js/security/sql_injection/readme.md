##面试中的安全问题！！！
- 前端安全
  - 主要是表单
        form表单会触发onsubmit事件——>url
        POST方法带上data:{
                            email:'jiangyefang@163.com',
                            password:'123456'
                        }
    后端 登入过程有一个SQL 查找的过程 若出现表单禁止符的话 sql语法报错，服务器出错

1. 用户的输入不可信任
    password' 导致了sql的提前结束(语法错误) 或 多了一个' 产生500错误 
    后端使用加密解密可以防止用户随意输入导致的问题

2. 不做sql injection 
    登入账号可能会被盗取

    escape("password'")
    "password%27"
    unescape("password%27")
    "password'"

<!-- 编码 ' —— > %27 -->
SELECT * from users WHERE email='user@email.com' AND password ='password%27'