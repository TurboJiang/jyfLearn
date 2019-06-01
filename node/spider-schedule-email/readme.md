<!-- 请求包 -->
#superagent
- npm install superagent -S

#cherrio
- npm install(yarn add) cherrio -S

#jquery内的方法
- x.find()查找某元素下面的内容 $('.box').find('p')——>查找box下的p标签

#正则
- /s 空白字符   replace(/\s/g, "")将所有的(全局)空白字符替换成空，目的去除无用的空白字符

## promise
- promise.all([promise组成的数组])
  返回一个promise 所有promise resolve 的时候 它才 resolve
  resolve 时候的值就是 [所有promise]resolve 组成的数组

##模版引擎
    发漂亮邮件 需要发送html
    html不是静态的 需要数据填充 编译成html
    数据填充 {{name}}  {name} 将变量编译进去
  模版引擎 同理 ——>将位置用变量占好，再将变量编译进去
- MVC
    jsp
    node 模版引擎 承载页面（view）

    ejs、jade模板引擎
    <%= %> 变量
    <% %> js执行 
# ejs 模板引擎
-  npm install ejs -S

#邮件
- npm install nodemailer -S