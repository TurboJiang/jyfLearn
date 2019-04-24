- wxml是模板，{{}}是要被编译的模板，用户看到的view 不是wxml 是wxml 被js中的data填充编译之后的页面(page) 不是wxml 是wxml+wxss+js合体 再进行compile

-setData({
    相应数据时
})触发重新compile
- 我们会在wxml里把所有的逻辑及对数据的渴求都表达，在某一刻页面只会显示当前状态的页面状态 跟数据相关
    状态 由数据决定  
        只要改变数据 setData之后界面自动跟随变换 数据驱动的界面MVVM
        数据和界面状态一一对应
- todos
    健身 
    表单
    再用js dom编程 加todos [] appendChild

    data:{
        todos:[]
    }
    form submit时提交数据 this.setData()新增数据
    
- {{js 运行区域}}
input数据没有添加进去 如何添加到todos中？