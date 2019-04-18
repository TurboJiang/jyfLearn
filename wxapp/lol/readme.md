##微信小程序
- 小程序开发工具，帮助我们初始化一个项目框架
小程序是架构在微信（原生app）,使用前端技术和思想，来快速开发，一份代码，到处运行

好处：不用下载，不用写两次，快速高效 
w==>weixin xml 为了性能优化以及新功能 创建了新的标签
    view = div 
- html=>wxml 添加了新标签
  css=>wxss
  js=>js bindtap => onclick
  page = wxml + wxss + js

  小程序由一个个page组成，每个page由这三个部分组成
  app.json是项目描述文件 添加的page要在app.json里声明
  在切页面的时候，我们调用了wx.navigateTo()

- MVVM
    只要你有了数据(Model  下面) 在js中用data声明
    Page({
        data:{
            legends:[]
        }
    })
    View 视图层 WXML 等待着数据编译输出的html模板{{}}——>占位符
    指令，循环输出wx:for="{{}}"